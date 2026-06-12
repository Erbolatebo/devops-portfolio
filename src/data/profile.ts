export const profile = {
  name: "Ерболат Усер",
  title: "DevOps-инженер",
  location: "Алматы, Казахстан",
  tagline:
    "Сопровождение production-инфраструктуры, CI/CD, Kubernetes и observability",
  about: `DevOps-инженер с 2+ годами опыта в сопровождении production-инфраструктуры, построении CI/CD-процессов, Kubernetes-окружений и систем мониторинга. Работал с GitLab CI/CD, Jenkins, Docker, Kubernetes, ArgoCD, Nexus, Nginx, Prometheus, Grafana, Alertmanager и Sentry.

Сильная сторона — troubleshooting CI/CD, Kubernetes, Nginx/proxy, мониторинга и инфраструктурных инцидентов. Участвовал в поддержке production-сервисов, оптимизации пайплайнов, автоматизации рутинных операций через Ansible/Bash и взаимодействии с командами разработки, QA, инфраструктуры и внешними вендорами.

Целевой фокус: развитие в роли Middle DevOps Engineer с упором на CI/CD, Kubernetes, observability, automation и reliability production-сервисов.`,
  highlights: [
    { value: "2.5+", label: "года опыта" },
    { value: "8 мин", label: "среднее время деплоя" },
    { value: "5 мин", label: "обнаружение инцидентов" },
    { value: "40%", label: "меньше необнаруженных ошибок" },
  ],
  contacts: {
    email: "erbolatusa@gmail.com",
    phone: "+7 (775) 545-47-06",
    telegram: "@ErbolatUsser",
    telegramUrl: "https://t.me/ErbolatUsser",
    location: "Алматы",
  },
  experience: [
    {
      company: "Krisbit",
      location: "Алматы",
      role: "DevOps-инженер",
      period: "Декабрь 2024 — настоящее время",
      duration: "1 год 7 месяцев",
      description:
        "Работал в аутсорсинговой команде над двумя клиентскими production-проектами: betting/e-commerce и banking/fintech. Отвечал за CI/CD, Kubernetes, Docker/Nexus, Jenkins/GitLab CI, Nginx, мониторинг и инфраструктурную автоматизацию.",
      achievements: [
        "Сократил среднее время деплоя с ~30 до ~8 минут за счёт оптимизации pipeline stages, cache и сборки Docker-образов",
        "Сопровождал Kubernetes-окружения (dev/test/prod): Deployments, Services, Ingress, PVC, ConfigMap, Secrets, GitOps/ArgoCD",
        "Автоматизировал инфраструктурные операции через Ansible и Bash — экономия ~6 часов в неделю",
        "Сократил среднее время обнаружения инцидентов с ~20 до ~5 минут через Prometheus, Grafana, Alertmanager",
        "Развернул Sentry для мониторинга ошибок — снижение необнаруженных ошибок примерно на 40%",
        "Настроил сборку и публикацию CocoaPods mirror во внутренний Nexus для iOS-сборок",
        "Сопровождал CI/CD для backend, mobile и miniapp mPaaS-направлений совместно с командой Ant",
      ],
      tags: ["Kubernetes", "GitLab CI", "Jenkins", "ArgoCD", "Prometheus", "Ansible"],
    },
    {
      company: "Global Rise Technologies",
      location: "Алматы",
      role: "DevOps-инженер",
      period: "Февраль 2024 — Декабрь 2024",
      duration: "11 месяцев",
      description:
        "Первый коммерческий опыт в DevOps-команде: CI/CD, контейнеризация, Kubernetes, Nginx, автоматизация и мониторинг.",
      achievements: [
        "Настраивал GitLab CI/CD pipelines для сборки Docker-образов и деплоя в Kubernetes",
        "Работал с Kubernetes-ресурсами: Deployments, Services, Ingress, PVC; troubleshooting приложений",
        "Контейнеризировал приложения с Docker и Docker Compose, дорабатывал Dockerfile",
        "Писал Ansible playbooks и Bash-скрипты для автоматизации повторяющихся задач",
        "Настраивал Nginx reverse proxy и мониторинг Prometheus/Grafana, базовое логирование через ELK",
      ],
      tags: ["GitLab CI", "Docker", "Kubernetes", "Nginx", "Ansible", "ELK"],
    },
  ],
  skills: [
  "Kubernetes",
  "Docker",
  "GitLab CI/CD",
  "Jenkins",
  "ArgoCD",
  "Terraform",
  "Ansible",
  "Linux",
  "Nginx",
  "Prometheus",
  "Grafana",
  "Sentry",
  "Python",
  "Bash",
  "Git",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Nexus",
  "CI/CD",
  ],
  education: [
    {
      title: "Бакалавр, Компьютерная инженерия",
      institution: "КазНУ им. аль-Фараби",
      location: "Алматы",
      year: "2025",
    },
    {
      title: "DevOps Internship",
      institution: "BCC",
      location: "Алматы",
      year: "2025",
    },
    {
      title: "Cisco Networking",
      institution: "Cisco",
      year: "2023",
    },
  ],
  certificates: ["BCC-HUB (2025)", "Cisco Networking (2023)"],
  languages: [
    { name: "Казахский", level: "Родной" },
    { name: "Русский", level: "C1 — Продвинутый" },
    { name: "Английский", level: "B1 — Средний" },
  ],
};
