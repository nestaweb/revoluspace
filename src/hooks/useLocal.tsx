'use client'
import { useRouter } from 'next/router';

export default function useLocal() {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale || 'en';

  return { locale };
}