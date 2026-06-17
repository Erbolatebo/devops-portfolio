export const profile = {
  name: "Ерболат Усер",
  title: "DevOps-инженер",
  targetRole: "Junior+ / Middle",
  location: "Алматы, Казахстан",
  tagline:
    "Production CI/CD, Kubernetes и observability — от сборки до разбора инцидента в проде",
  about: `DevOps-инженер с 2+ годами коммерческого опыта в production-окружениях fintech и e-commerce. Отвечал за CI/CD, Kubernetes, мониторинг и автоматизацию на двух клиентских проектах с реальным трафиком и SLA.

Сильные стороны — ускорение delivery-процессов, сопровождение K8s-кластеров и быстрый troubleshooting: CI/CD, контейнеры, Nginx/proxy, метрики и алерты. Умею работать на стыке разработки, QA и инфраструктуры: релизы, инциденты, оптимизация пайплайнов, Ansible/Bash-автоматизация.

Цель — Middle DevOps Engineer (открыт к сильной позиции Junior+) в продуктовой или аутсорс-команде с фокусом на reliability, observability и предсказуемые релизы.`,
  strengths: [
    {
      title: "CI/CD & Delivery",
      description:
        "GitLab CI, Jenkins, Nexus. Оптимизация пайплайнов, кэш, multi-stage Docker, versioning и доставка артефактов в dev/test/prod.",
    },
    {
      title: "Kubernetes & Runtime",
      description:
        "Deployments, Services, Ingress, PVC, ConfigMap, Secrets. GitOps через ArgoCD. Деплой релизов и разбор падений pod'ов в production.",
    },
    {
      title: "Observability",
      description:
        "Prometheus, Grafana, Alertmanager, Sentry. Дашборды, alert rules, снижение MTTD и быстрее обнаружение ошибок в test/prod.",
    },
    {
      title: "Automation & Incidents",
      description:
        "Ansible, Bash, Linux, Nginx. Автоматизация рутины, reverse proxy, участие в production-инцидентах и post-mortem разборе.",
    },
  ],
  highlights: [
    { value: "2.5+", label: "года в production" },
    { value: "×4", label: "ускорение деплоя" },
    { value: "5 мин", label: "MTTD инцидентов" },
    { value: "2", label: "production-проекта" },
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
      location: "Алматы · аутсорсинг",
      role: "DevOps-инженер",
      period: "Декабрь 2024 — настоящее время",
      duration: "1 год 7 месяцев",
      description:
        "Сопровождение двух клиентских production-проектов (fintech/banking и betting/e-commerce). Зона ответственности: CI/CD, Kubernetes, Docker/Nexus, Jenkins/GitLab CI, Nginx, мониторинг и инфраструктурная автоматизация.",
      achievements: [
        "Ускорил среднее время деплоя с ~30 до ~8 минут (~73%): оптимизация stages, cache, variables и multi-stage сборки Docker-образов",
        "Сократил MTTD production-инцидентов с ~20 до ~5 минут: дашборды, метрики и alert rules в Prometheus/Grafana/Alertmanager",
        "Автоматизировал повторяющиеся инфраструктурные операции через Ansible и Bash — экономия ~6 часов ручной работы в неделю",
        "Внедрил Sentry для error tracking в test/prod; снизил долю необнаруженных ошибок примерно на 40%",
        "Сопровождал Kubernetes-окружения dev/test/prod: релизы, конфигурации, Ingress, PVC, Secrets; GitOps-деплой через ArgoCD",
        "Настроил процесс сборки, версионирования и публикации Docker-образов во внутренний и внешний Nexus Repository",
        "Поддерживал CI/CD для backend, mobile и miniapp (mPaaS): Jenkins jobs, GitLab integration, доставка артефактов, разбор pipeline failures",
        "Организовал регулярную сборку CocoaPods mirror во внутренний Nexus для стабильных iOS-сборок и внутренних зависимостей",
        "Участвовал в production troubleshooting: K8s events/logs, container failures, CI/CD errors, Nginx/proxy и сетевые проблемы",
      ],
      tags: [
        "Kubernetes",
        "GitLab CI",
        "Jenkins",
        "ArgoCD",
        "Prometheus",
        "Ansible",
        "Nexus",
        "Sentry",
      ],
    },
    {
      company: "Global Rise Technologies",
      location: "Алматы",
      role: "DevOps-инженер",
      period: "Февраль 2024 — Декабрь 2024",
      duration: "11 месяцев",
      description:
        "Коммерческий DevOps в продуктовой команде: построение CI/CD, контейнеризация сервисов, базовая observability и поддержка Kubernetes-окружений.",
      achievements: [
        "Настроил GitLab CI/CD pipelines: build → Docker image → deploy в Kubernetes для нескольких сервисов",
        "Поддерживал Kubernetes workloads (Deployments, Services, Ingress, PVC); диагностировал падения приложений и проблемы окружения",
        "Контейнеризировал сервисы через Docker/Docker Compose; дорабатывал Dockerfile под требования проектов",
        "Писал Ansible playbooks и Bash-скрипты для автоматизации типовых операций и подготовки серверов",
        "Настраивал Nginx reverse proxy для публикации сервисов и маршрутизации трафика",
        "Разворачивал мониторинг Prometheus/Grafana и базовое логирование через ELK Stack",
        "Работал с Git flow: feature branches, merge requests, code review, разрешение конфликтов",
      ],
      tags: ["GitLab CI", "Docker", "Kubernetes", "Nginx", "Ansible", "ELK"],
    },
  ],
  skillCategories: [
    {
      title: "Основной стек",
      subtitle: "ежедневная работа",
      items: [
        "Kubernetes",
        "Docker",
        "GitLab CI/CD",
        "Jenkins",
        "Linux",
        "Nginx",
        "Prometheus",
        "Grafana",
        "Ansible",
        "Bash",
        "Git",
      ],
    },
    {
      title: "CI/CD & Delivery",
      subtitle: "уверенно применяю",
      items: ["ArgoCD", "Nexus", "CI/CD", "Alertmanager", "Sentry"],
    },
    {
      title: "Автоматизация & IaC",
      subtitle: "рабочий уровень",
      items: ["Terraform", "Python"],
    },
    {
      title: "Данные & смежное",
      subtitle: "базовый опыт",
      items: ["PostgreSQL", "MongoDB", "Redis", "ELK"],
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
    "Alertmanager",
    "Sentry",
    "Python",
    "Bash",
    "Git",
    "Nexus",
    "CI/CD",
    "PostgreSQL",
    "MongoDB",
    "Redis",
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
