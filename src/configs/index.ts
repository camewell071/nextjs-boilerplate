import { ApplicationEnvironment } from '@/enums/configs';

export const APP_ENV: string = process.env.NEXT_PUBLIC_MODE!;

const isProduction = APP_ENV === ApplicationEnvironment.PRODUCTION;

const CDN_ICON_URL: string = process.env.NEXT_PUBLIC_CDN_ICON_URL!;

export { isProduction, CDN_ICON_URL };
