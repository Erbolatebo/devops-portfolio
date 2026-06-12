# DevOps Portfolio — Ерболат Усер

Персональный сайт-портфолио DevOps-инженера. Статический сайт на Astro.

## Локальный запуск

```bash
nvm use          # Node.js 22+
npm install
npm run dev
```

Сайт откроется на `http://localhost:4321`

## Сборка

```bash
npm run build
npm run preview
```

## Публикация на Vercel

1. Загрузите репозиторий на GitHub
2. Зайдите на [vercel.com](https://vercel.com) и авторизуйтесь через GitHub
3. Нажмите **Add New Project** → выберите репозиторий
4. Vercel автоматически определит Astro — нажмите **Deploy**
5. Получите адрес вида `your-name.vercel.app`

Каждый `git push` в main автоматически обновляет сайт.

## Подключение своего домена

1. Купите домен у регистратора (Namecheap, Cloudflare, и т.д.)
2. В Vercel: **Project Settings → Domains → Add**
3. Добавьте DNS-записи, которые покажет Vercel (обычно CNAME или A)
4. HTTPS включится автоматически

## Структура

```text
src/
├── components/     # Секции сайта
├── data/           # Данные резюме (profile.ts)
├── layouts/        # Общий layout
├── pages/          # Страницы
└── styles/         # Глобальные стили
```

Чтобы обновить контент — редактируйте `src/data/profile.ts`.
