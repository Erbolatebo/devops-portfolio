export const profile = {
  name: "Ерболат Усер",
  title: "DevOps-инженер",
  targetRole: "Production CI/CD, Kubernetes, Observability",
  location: "Алматы, Казахстан",
  tagline:
    "Выстраиваю предсказуемые релизы, поддерживаю Kubernetes-окружения и сокращаю время реакции на production-инциденты",
  about: `DevOps-инженер с 2+ годами коммерческого опыта в production-окружениях fintech, banking и e-commerce. Отвечаю за CI/CD, Kubernetes, observability и инфраструктурную автоматизацию на проектах с реальным трафиком, релизным циклом и SLA.

Мой рабочий контур — delivery pipeline, контейнеризация, K8s runtime, monitoring/alerting и разбор инцидентов. Умею брать в сопровождение сервис от сборки артефакта до деплоя, метрик, алертов и troubleshooting в production.

Сильнее всего полезен командам, где важны reliability, скорость поставки и прозрачность эксплуатации: уменьшаю ручные операции, сокращаю время доставки изменений и упрощаю поиск причин сбоев.`,
  strengths: [
    {
      title: "Delivery Ownership",
      description:
        "Сопровождаю путь изменения от commit до production: сборка, versioning, Docker image, публикация артефактов, deploy и контроль стабильности релиза.",
    },
    {
      title: "Kubernetes Operations",
      description:
        "Работаю с повседневной эксплуатацией K8s: Deployments, Services, Ingress, PVC, ConfigMap, Secrets, GitOps через ArgoCD и production troubleshooting.",
    },
    {
      title: "Incident Readiness",
      description:
        "Строю наблюдаемость вокруг сервиса: метрики, дашборды, alert rules, error tracking и понятный процесс первичного разбора инцидента.",
    },
    {
      title: "Automation",
      description:
        "Снимаю ручную рутину через Ansible и Bash, стандартизирую повторяемые операции и уменьшаю количество хрупких ручных шагов в delivery-процессе.",
    },
  ],
  caseStudies: [
    {
      title: "Ускорение delivery-контура",
      scope: "Krisbit · fintech/banking и betting/e-commerce",
      summary:
        "Пересобрал CI/CD-пайплайны и процесс сборки образов так, чтобы релизы стали короче и стабильнее для нескольких production-контуров.",
      impact: [
        "Сократил среднее время деплоя примерно с 30 до 8 минут за счет оптимизации stages, cache, variables и multi-stage Docker builds",
        "Упростил версионирование и публикацию Docker-образов во внутренний и внешний Nexus Repository",
        "Поддерживал доставку артефактов и релизов для backend, mobile и miniapp через Jenkins и GitLab integration",
      ],
    },
    {
      title: "Снижение времени обнаружения инцидентов",
      scope: "Krisbit · production observability",
      summary:
        "Собрал рабочий базовый observability-слой для сервисов и окружений, чтобы команда быстрее замечала деградации и ошибки.",
      impact: [
        "Снизил MTTD production-инцидентов примерно с 20 до 5 минут через Prometheus, Grafana и Alertmanager",
        "Внедрил Sentry в test/prod и сократил долю необнаруженных ошибок примерно на 40%",
        "Использовал K8s events/logs, метрики и proxy/network diagnostics для первичного troubleshooting инцидентов",
      ],
    },
    {
      title: "Сокращение ручных операций",
      scope: "Global Rise Technologies и Krisbit",
      summary:
        "Выносил повторяемые инфраструктурные задачи в автоматизацию и стандартизировал подготовку окружений и типовые операции поддержки.",
      impact: [
        "Автоматизировал повторяющиеся действия через Ansible и Bash с экономией около 6 часов ручной работы в неделю",
        "Писал playbooks и shell-скрипты для подготовки серверов, сервисных операций и стабильных релизных процедур",
        "Настраивал Nginx reverse proxy и базовые эксплуатационные сценарии вокруг сервисов и окружений",
      ],
    },
  ],
  highlights: [
    { value: "2.5+", label: "года в production" },
    { value: "×4", label: "ускорение деплоя" },
    { value: "5 мин", label: "MTTD инцидентов" },
    { value: "2", label: "клиентских production-контура" },
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
        "Веду delivery и эксплуатационный контур двух клиентских production-проектов. Отвечаю за CI/CD, Kubernetes, Docker/Nexus, Jenkins/GitLab CI, Nginx, observability и инфраструктурную автоматизацию.",
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
        "DevOps в продуктовой команде с фокусом на построение CI/CD, контейнеризацию сервисов, базовую observability и поддержку Kubernetes-окружений.",
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
      subtitle: "production hands-on",
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
      title: "Delivery & Observability",
      subtitle: "регулярно применяю",
      items: ["ArgoCD", "Nexus", "CI/CD", "Alertmanager", "Sentry"],
    },
    {
      title: "Автоматизация & IaC",
      subtitle: "рабочий уровень",
      items: ["Terraform", "Python"],
    },
    {
      title: "Data & Adjacent",
      subtitle: "использовал в проектах",
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
