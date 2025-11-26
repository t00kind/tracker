import crypto from 'crypto'

/**
 * Проверяет подлинность данных, полученных от Telegram WebApp
 * @param initData - строка initData от Telegram WebApp
 * @param botToken - токен вашего Telegram бота
 * @returns true если данные валидны
 */
export function validateTelegramWebAppData(initData: string, botToken: string): boolean {
  try {
    const urlParams = new URLSearchParams(initData)
    const hash = urlParams.get('hash')
    urlParams.delete('hash')
    
    if (!hash) return false

    // Сортируем параметры
    const dataCheckString = Array.from(urlParams.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n')

    // Создаем секретный ключ из токена бота
    const secretKey = crypto
      .createHmac('sha256', 'WebAppData')
      .update(botToken)
      .digest()

    // Вычисляем hash
    const calculatedHash = crypto
      .createHmac('sha256', secretKey as unknown as crypto.BinaryLike)
      .update(dataCheckString)
      .digest('hex')

    return calculatedHash === hash
  } catch (error) {
    console.error('Error validating Telegram data:', error)
    return false
  }
}

/**
 * Парсит initData из Telegram WebApp
 */
export function parseTelegramWebAppData(initData: string) {
  try {
    const urlParams = new URLSearchParams(initData)
    const userParam = urlParams.get('user')
    
    if (!userParam) return null

    const user = JSON.parse(decodeURIComponent(userParam))
    
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      username: user.username,
      languageCode: user.language_code,
      isPremium: user.is_premium || false,
      authDate: urlParams.get('auth_date'),
    }
  } catch (error) {
    console.error('Error parsing Telegram data:', error)
    return null
  }
}

