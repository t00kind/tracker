export interface ITelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
  }
  
  export interface IWebApp {
    showPopup(arg0: { title: string; message: string; buttons: { type: string; }[]; }): unknown;
    PopupParams: any;
    onEvent(arg0: string, back: () => void): unknown;
    SettingsButton: any;
    initData: string;
    initDataUnsafe: {
      query_id: string;
      user: ITelegramUser;
      auth_date: string;
      hash: string;
    };
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: {
      link_color: string;
      button_color: string;
      button_text_color: string;
      secondary_bg_color: string;
      hint_color: string;
      bg_color: string;
      text_color: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    isClosingConfirmationEnabled: boolean;
    headerColor: string;
    backgroundColor: string;
    BackButton: {
      onClick(bbback: (e: any) => void): unknown;
      show(): unknown;
      isVisible: boolean;
    };
    MainButton: {
      enable(): unknown;
      show(): unknown;
      onClick(sub: () => Promise<void>): unknown;
      setText(arg0: string): unknown;
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isProgressVisible: boolean;
      isActive: boolean;
    };
    HapticFeedback: any;
  }
  