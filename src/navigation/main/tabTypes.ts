import { StackNavigationProp } from '@react-navigation/stack'

export type MainTabType = 'Hotspots' | 'Wallet' | 'Notifications' | 'More'

export type TabBarIconType = {
  focused: boolean
  color: string
  size: number
}

export type LockScreenRequestType =
  | 'disablePin'
  | 'enablePinForPayments'
  | 'disablePinForPayments'
  | 'resetPin'
  | 'unlock'
  | 'revealWords'

export type RootStackParamList = {
  MainTabs: undefined | { pinVerifiedFor: LockScreenRequestType }
  LockScreen: { requestType: LockScreenRequestType; lock?: boolean }
  HotspotSetup: undefined
  Scan: undefined
  Send: undefined
}

export type RootNavigationProp = StackNavigationProp<RootStackParamList>
