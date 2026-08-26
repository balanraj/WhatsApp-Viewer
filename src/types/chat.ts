export type MessageType='text'|'image'|'video'|'audio'|'document'|'sticker'|'location'|'contact'|'system'|'unknown';
export interface ChatMessage {id:string;timestamp?:Date;dateKey?:string;sender:string;type:MessageType;text?:string;mediaFile?:string;mediaUrl?:string;fileName?:string;isSystemMessage:boolean;isDeleted?:boolean;}
export interface ChatData {name:string;participants:string[];messages:ChatMessage[];files:Map<string,Blob>;}
