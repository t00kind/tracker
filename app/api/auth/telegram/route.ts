import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { parseTelegramWebAppData, validateTelegramWebAppData } from '@/app/lib/telegram'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { initData } = body

    if (!initData) {
      return NextResponse.json(
        { error: 'InitData is required' },
        { status: 400 }
      )
    }

    // Валидация данных от Telegram (опционально, если есть BOT_TOKEN)
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    if (botToken) {
      const isValid = validateTelegramWebAppData(initData, botToken)
      if (!isValid) {
        return NextResponse.json(
          { error: 'Invalid Telegram data' },
          { status: 401 }
        )
      }
    }

    // Парсим данные пользователя
    const telegramUser = parseTelegramWebAppData(initData)
    
    if (!telegramUser) {
      return NextResponse.json(
        { error: 'Failed to parse user data' },
        { status: 400 }
      )
    }

    // Находим или создаем пользователя в базе данных
    const user = await prisma.user.upsert({
      where: {
        telegramId: BigInt(telegramUser.id),
      },
      update: {
        username: telegramUser.username,
        firstName: telegramUser.firstName,
        lastName: telegramUser.lastName,
      },
      create: {
        telegramId: BigInt(telegramUser.id),
        username: telegramUser.username,
        firstName: telegramUser.firstName,
        lastName: telegramUser.lastName,
      },
    })

    // Конвертируем BigInt в строку для JSON
    const userResponse = {
      ...user,
      telegramId: user.telegramId.toString(),
    }

    return NextResponse.json({
      success: true,
      user: userResponse,
    })
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const telegramId = searchParams.get('telegramId')

    if (!telegramId) {
      return NextResponse.json(
        { error: 'TelegramId is required' },
        { status: 400 }
      )
    }

    // Находим пользователя
    const user = await prisma.user.findUnique({
      where: {
        telegramId: BigInt(telegramId),
      },
      include: {
        habits: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Конвертируем BigInt в строку для JSON
    const userResponse = {
      ...user,
      telegramId: user.telegramId.toString(),
    }

    return NextResponse.json({
      success: true,
      user: userResponse,
    })
  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

