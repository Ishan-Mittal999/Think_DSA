export enum ViewState {
  HOME = 'HOME',
  PLAYGROUND = 'PLAYGROUND',
  ABOUT = 'ABOUT',
  TEAM = 'TEAM'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  type?: 'hint' | 'approach' | 'complexity' | 'general';
}

export interface TeamMember {
  name: string;
  role: string;
  rollNo: string;
}
