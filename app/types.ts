// Telegram Mini App Types - Bot API 9.1 (July 2025)
// Based on https://core.telegram.org/bots/webapps

export interface ITelegramUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface IWebApp {
  // Basic properties
  initData: string;
  initDataUnsafe: {
    query_id?: string;
    user?: ITelegramUser;
    receiver?: ITelegramUser;
    chat?: WebAppChat;
    chat_type?: string;
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date: number;
    hash: string;
  };
  version: string;
  platform: string;
  colorScheme: 'light' | 'dark';
  themeParams: ThemeParams;
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  bottomBarColor: string;
  isClosingConfirmationEnabled: boolean;
  isVerticalSwipesEnabled: boolean;
  
  // Bot API 8.0+ Full-screen mode
  isActive: boolean;
  isFullscreen: boolean;
  safeAreaInset: SafeAreaInset;
  contentSafeAreaInset: ContentSafeAreaInset;
  
  // Bot API 8.0+ Device orientation
  isOrientationLocked: boolean;

  // Buttons
  BackButton: BackButton;
  MainButton: MainButton;
  SettingsButton: SettingsButton;
  SecondaryButton: SecondaryButton; // Bot API 7.10+

  // Managers
  HapticFeedback: HapticFeedback;
  CloudStorage: CloudStorage; // Bot API 6.9+
  BiometricManager: BiometricManager; // Bot API 7.2+
  LocationManager: LocationManager; // Bot API 8.0+
  
  // Bot API 9.0+ Storage
  DeviceStorage: DeviceStorage;
  SecureStorage: SecureStorage;
  
  // Bot API 8.0+ Sensors
  Accelerometer: Accelerometer;
  DeviceOrientation: DeviceOrientationManager;
  Gyroscope: Gyroscope;

  // Methods
  ready(): void;
  expand(): void;
  close(): void;
  
  // Confirmation
  enableClosingConfirmation(): void;
  disableClosingConfirmation(): void;
  
  // Vertical swipes (Bot API 7.7+)
  enableVerticalSwipes(): void;
  disableVerticalSwipes(): void;
  
  // Popups
  showPopup(params: PopupParams, callback?: (button_id: string) => void): void;
  showAlert(message: string, callback?: () => void): void;
  showConfirm(message: string, callback?: (confirmed: boolean) => void): void;
  showScanQrPopup(params: ScanQrPopupParams, callback?: (text: string) => boolean): void;
  closeScanQrPopup(): void;
  
  // Bot API 9.1+ Keyboard
  hideKeyboard(): void;
  
  // Links
  openLink(url: string, options?: { try_instant_view?: boolean }): void;
  openTelegramLink(url: string): void;
  openInvoice(url: string, callback?: (status: string) => void): void;
  
  // Sharing (Bot API 7.8+)
  shareToStory(media_url: string, params?: ShareStoryParams): void;
  
  // Bot API 8.0+ Media sharing
  shareMessage(msg_id: string, callback?: (success: boolean) => void): void;
  
  // Bot API 8.0+ File download
  downloadFile(params: DownloadFileParams, callback?: (success: boolean) => void): void;
  
  // Inline mode (Bot API 6.7+)
  switchInlineQuery(query: string, choose_chat_types?: string[]): void;
  
  // Clipboard (Bot API 6.4+)
  readTextFromClipboard(callback?: (text: string) => void): void;
  
  // Permissions (Bot API 6.9+)
  requestWriteAccess(callback?: (granted: boolean) => void): void;
  requestContact(callback?: (granted: boolean) => void): void;
  
  // Bot API 8.0+ Emoji status
  setEmojiStatus(custom_emoji_id: string, params?: EmojiStatusParams, callback?: (success: boolean) => void): void;
  requestEmojiStatusAccess(callback?: (granted: boolean) => void): void;
  
  // Bot API 8.0+ Full-screen
  requestFullscreen(): void;
  exitFullscreen(): void;
  lockOrientation(): void;
  unlockOrientation(): void;
  
  // Bot API 8.0+ Home screen
  addToHomeScreen(): void;
  checkHomeScreenStatus(callback?: (status: string) => void): void;
  
  // Colors
  setHeaderColor(color: string): void;
  setBackgroundColor(color: string): void;
  setBottomBarColor(color: string): void; // Bot API 7.10+

  // Events
  onEvent(eventType: string, eventHandler: () => void): void;
  offEvent(eventType: string, eventHandler: () => void): void;
  sendData(data: string): void;
}

export interface ThemeParams {
  bg_color?: string;
  text_color?: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
  header_bg_color?: string;
  accent_text_color?: string;
  section_bg_color?: string;
  section_header_text_color?: string;
  subtitle_text_color?: string;
  destructive_text_color?: string;
  section_separator_color?: string;
  bottom_bar_bg_color?: string;
}

export interface BackButton {
  isVisible: boolean;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
}

export interface MainButton {
  text: string;
  color: string;
  textColor: string;
  isVisible: boolean;
  isActive: boolean;
  isProgressVisible: boolean;
  setText(text: string): void;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
  enable(): void;
  disable(): void;
  showProgress(leaveActive?: boolean): void;
  hideProgress(): void;
  setParams(params: ButtonParams): void;
}

export interface SecondaryButton {
  text: string;
  color: string;
  textColor: string;
  isVisible: boolean;
  isActive: boolean;
  isProgressVisible: boolean;
  position: 'left' | 'right' | 'top' | 'bottom';
  setText(text: string): void;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
  enable(): void;
  disable(): void;
  showProgress(leaveActive?: boolean): void;
  hideProgress(): void;
  setParams(params: ButtonParams): void;
}

export interface SettingsButton {
  isVisible: boolean;
  onClick(callback: () => void): void;
  offClick(callback: () => void): void;
  show(): void;
  hide(): void;
}

export interface ButtonParams {
  text?: string;
  color?: string;
  text_color?: string;
  is_active?: boolean;
  is_visible?: boolean;
}

export interface HapticFeedback {
  impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void;
  notificationOccurred(type: 'error' | 'success' | 'warning'): void;
  selectionChanged(): void;
}

export interface CloudStorage {
  setItem(key: string, value: string, callback?: (error: string | null, success: boolean) => void): void;
  getItem(key: string, callback: (error: string | null, value: string | null) => void): void;
  getItems(keys: string[], callback: (error: string | null, values: Record<string, string>) => void): void;
  removeItem(key: string, callback?: (error: string | null, success: boolean) => void): void;
  removeItems(keys: string[], callback?: (error: string | null, success: boolean) => void): void;
  getKeys(callback: (error: string | null, keys: string[]) => void): void;
}

export interface BiometricManager {
  isInited: boolean;
  isBiometricAvailable: boolean;
  biometricType: 'finger' | 'face' | 'unknown';
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  isBiometricTokenSaved: boolean;
  deviceId: string;
  init(callback?: () => void): void;
  requestAccess(params: BiometricRequestAccessParams, callback?: (granted: boolean) => void): void;
  authenticate(params: BiometricAuthenticateParams, callback?: (success: boolean, token?: string) => void): void;
  updateBiometricToken(token: string, callback?: (success: boolean) => void): void;
  openSettings(): void;
}

export interface BiometricRequestAccessParams {
  reason?: string;
}

export interface BiometricAuthenticateParams {
  reason?: string;
}

export interface LocationManager {
  isInited: boolean;
  isLocationAvailable: boolean;
  isAccessRequested: boolean;
  isAccessGranted: boolean;
  init(callback?: () => void): void;
  getLocation(callback: (location: LocationData | null) => void): void;
  openSettings(): void;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  altitude?: number;
  course?: number;
  speed?: number;
  horizontal_accuracy?: number;
  vertical_accuracy?: number;
}

// Bot API 9.0+ Storage
export interface DeviceStorage {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  getKeys(): Promise<string[]>;
}

export interface SecureStorage {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  getKeys(): Promise<string[]>;
}

// Bot API 8.0+ Sensors
export interface Accelerometer {
  isStarted: boolean;
  x: number;
  y: number;
  z: number;
  start(params: AccelerometerStartParams, callback?: (started: boolean) => void): void;
  stop(callback?: (stopped: boolean) => void): void;
}

export interface AccelerometerStartParams {
  refresh_rate?: number;
}

export interface DeviceOrientationManager {
  isStarted: boolean;
  absolute: boolean;
  alpha: number;
  beta: number;
  gamma: number;
  start(params: DeviceOrientationStartParams, callback?: (started: boolean) => void): void;
  stop(callback?: (stopped: boolean) => void): void;
}

export interface DeviceOrientationStartParams {
  refresh_rate?: number;
  need_absolute?: boolean;
}

export interface Gyroscope {
  isStarted: boolean;
  x: number;
  y: number;
  z: number;
  start(params: GyroscopeStartParams, callback?: (started: boolean) => void): void;
  stop(callback?: (stopped: boolean) => void): void;
}

export interface GyroscopeStartParams {
  refresh_rate?: number;
}

export interface SafeAreaInset {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface ContentSafeAreaInset {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface PopupParams {
  title?: string;
  message: string;
  buttons?: PopupButton[];
}

export interface PopupButton {
  id?: string;
  type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
  text?: string;
}

export interface ScanQrPopupParams {
  text?: string;
}

export interface ShareStoryParams {
  text?: string;
  widget_link?: {
    url: string;
    name?: string;
  };
}

export interface DownloadFileParams {
  url: string;
  file_name: string;
}

export interface EmojiStatusParams {
  duration?: number;
}

export interface WebAppChat {
  id: number;
  type: 'group' | 'supergroup' | 'channel';
  title: string;
  username?: string;
  photo_url?: string;
}
