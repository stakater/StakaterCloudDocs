import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarEn: SidebarConfig = [
  {
    text: "Introduction",
    collapsible: true,
    children: [
      "/content/sre/introduction/introduction.md",
      "/content/sre/introduction/why-sro.md",
      "/content/sre/introduction/sro-overview.md",
      "/content/sre/introduction/sro-features.md",
      "/content/sre/introduction/sro-key-differentiators.md",
      "/content/sre/introduction/saap-vs-k8s.md"
    ],
  },
  {
    text: "SAAP SLA",
    collapsible: true,
    children: [
      "/content/saap-sla/saap-sla.md",
    ],
  },
  {
    text: "SAAP Onboarding",
    collapsible: true,
    children: [
      "/content/onboarding/onboarding.md",
    ],
  },
  {
    text: "OpenShift as a Service",
    collapsible: true,
    children: [
      "/content/openshift-as-a-service/offer.md",
      "/content/openshift-as-a-service/general-provisions.md",
      "/content/openshift-as-a-service/service-composition.md",
      "/content/openshift-as-a-service/business-hours.md",
      "/content/openshift-as-a-service/technical-support.md",
      "/content/openshift-as-a-service/updating-clusters.md",
      "/content/openshift-as-a-service/sla.md",
      "/content/openshift-as-a-service/cost.md",
    ],
  },
  {
    text: "Managed AddOns",
    collapsible: true,
    children: ["/content/sre/addons/introduction.md"],
  },
  {
    text: "Cloud Provider",
    collapsible: true,
    children: [
      "/content/sre/cloud-provider/introduction.md",
      "/content/sre/cloud-provider/azure.md",
      "/content/sre/cloud-provider/aws.md",
      "/content/sre/cloud-provider/google.md",
      "/content/sre/cloud-provider/binero.md",
    ],
  },
  {
    text: "Cluster Management",
    collapsible: true,
     children: [
       "/content/sre/cluster-management/hibernating-your-cluster.md",],
  },
  {
    text: "Applications",
    collapsible: true,
    children: [
      "/content/sre/applications/cloud-native-app.md",
      "/content/sre/applications/helm.md",
      "/content/sre/forecastle/forecastle.md",
    ],
  },
  {
    text: "GitOps",
    collapsible: true,
    children: [
      "/content/sre/gitops/introduction.md",
      "/content/sre/gitops/github.md",
      "/content/sre/gitops/gitlab.md",
      "/content/sre/gitops/bot-account.md",
      "/content/sre/gitops/structure.md",
      "/content/sre/gitops/environments.md",
      "/content/sre/gitops/faqs.md",
    ],
  },
  {
    text: "Onboarding",
    collapsible: true,
    children: [
      "/content/sre/onboarding/tenant-onboarding.md",
      "/content/sre/onboarding/application-onboarding.md",
      "/content/sre/onboarding/environment-onboarding.md",
      "/content/sre/onboarding/cluster-onboarding.md",
      "/content/sre/onboarding/quota-onboarding.md",
      "/content/sre/onboarding/developer-training.md",
    ],
  },
  {
    text: "Authentication and Authorization",
    collapsible: true,
    children: [
      "/content/sre/authentication-authorization/google-idp.md",
      "/content/sre/authentication-authorization/azure-idp.md",
      "/content/sre/authentication-authorization/keycloak-idp.md",
      "/content/sre/authentication-authorization/saml-idp.md",
      "/content/sre/authentication-authorization/saap-authorization-roles.md",
      "/content/sre/authentication-authorization/curated-list-operators.md",
    ],
  },
  {
    text: "Continuous Integration & Deployment (CI&CD)",
    collapsible: true,
    children: ["/content/sre/pipelines/introduction.md"],
  },
  {
    text: "ArgoCD",
    collapsible: true,
    children: ["/content/sre/argocd/01-introduction.md"],
  },

  {
    text: "Tekton",
    collapsible: true,
    children: ["/content/sre/tekton/cluster-tasks.md"],
  },
  {
    text: "Artifacts Management",
    collapsible: true,
    children: [
      "/content/sre/repository/01-introduction.md",
      "/content/sre/repository/06-accessing-repository.md",
      "/content/sre/repository/03-permissions.md",
      "/content/sre/repository/04-routes.md",
      "/content/sre/repository/08-grant-nexus-admin-keycloak.md",
      "/content/sre/repository/05-FAQ.md",
    ],
  },
  {
    text: "Code Quality",
    collapsible: true,
    children: [
      "/content/sre/code-quality/01-introduction.md",
      "/content/sre/code-quality/sonarqube-upgrade.md",
    ],
  },
  {
    text: "Logging",
    collapsible: true,
    children: ["/content/sre/logging/logging.md", "/content/sre/logging/kibana-view-logs.md"],
  },
  {
    text: "Monitoring",
    collapsible: true,
    children: [
      "/content/sre/monitoring/01-introduction.md",
      "/content/sre/monitoring/02-maturity-model.md",
      "/content/sre/monitoring/app-uptime.md",
      "/content/sre/monitoring/app-alerts.md",
      "/content/sre/monitoring/goldilocks.md",
      "/content/sre/monitoring/grafana-dashboard.md",
    ],
  },
  {
    text: "Alerting",
    collapsible: true,
    children: [
      "/content/sre/alerting/downtime-notifications-uptimerobot.md",
      "/content/sre/alerting/workload-application-alerts.md",
      "/content/sre/alerting/log-alerts.md",
      "/content/sre/alerting/predefined-prometheusrules.md",
    ],
  },
  {
    text: "Autoscaling",
    collapsible: true,
    children: ["/content/sre/autoscaling/autoscaling.md"],
  },
  {
    text: "Machine Pools",
    collapsible: true,
    children: ["/content/sre/machinepools/machinepools.md"],
  },
  {
    text: "Storage",
    collapsible: true,
    children: ["/content/sre/storage/volume-expander.md"],
  },
  {
    text: "Backup & Restore",
    collapsible: true,
    children: [
      "/content/sre/backup-restore/01-introduction.md",
      "/content/sre/backup-restore/velero-cli.md",
      "/content/sre/backup-restore/backup-restore.md",
      "/content/sre/backup-restore/troubleshoot.md",
      "/content/sre/backup-restore/cleanup.md",
      "/content/sre/backup-restore/stateful-app-example.md",
      "/content/sre/backup-restore/restore-with-gitops.md",
      "/content/sre/backup-restore/02-limitations.md",
    ],
  },
  {
    text: "Networking",
    collapsible: true,
    children: [
      "/content/sre/networking/routes.md",
      "/content/sre/networking/hosting-dns.md",
      "/content/sre/networking/external-dns.md",
    ],
  },
  {
    text: "Secrets Management",
    collapsible: true,
    children: [
      "/content/secrets-management/introduction.md",
      "/content/secrets-management/sealed-secrets.md",
      "/content/secrets-management/vault.md",
    ],
  },
  {
    text: "Certificate Management",
    collapsible: true,
    children: ["/content/sre/certificates/cert-manager.md"],
  },
  {
    text: "Local Development",
    collapsible: true,
    children: [
      "/content/sre/local-development/inner-loop.md",
      "/content/sre/local-development/inner-vs-outer-loop.md",
      "/content/sre/local-development/local-development-workflow.md",
      "/content/sre/local-development/tilt/step-by-step-guide.md",
    ],
  },
  {
    text: "Security",
    collapsible: true,
    children: [
      "/content/sre/security/policies/policies.md",
      "/content/sre/security/rhacs/01-introduction.md",
      "/content/sre/security/rhacs/02-permissions.md",
      "/content/sre/security/rhacs/03-accessing-rhacs.md",
    ],
  },
  {
    text: "Cluster Configuration",
    collapsible: true,
    children: ["/content/sre/cluster-configuration/node-configuration.md"],
  },
  {
    text: "Multi Tenant Operator",
    collapsible: true,
    children: [
      "/content/sre/multi-tenant-operator/overview.md",
      "/content/sre/multi-tenant-operator/features.md",
      "/content/sre/multi-tenant-operator/installation.md",
      "/content/sre/multi-tenant-operator/integration-config.md",
      "/content/sre/multi-tenant-operator/customresources.md",
      "/content/sre/multi-tenant-operator/tenant-roles.md",
      {
        text: "Use Cases",
        children: [
          {
            text: "Creating Quotas",
            link: "/content/sre/multi-tenant-operator/usecases/quota.md",
          },
          {
            text: "Creating Tenants",
            link: "/content/sre/multi-tenant-operator/usecases/tenant.md",
          },
          {
            text: "Creating Namespaces",
            link: "/content/sre/multi-tenant-operator/usecases/namespace.md",
          },
          {
            text: "Limiting Volumes for Tenants",
            link: "/content/sre/multi-tenant-operator/usecases/volume-limits.md",
          },
          {
            text: "Creating Templates",
            link: "/content/sre/multi-tenant-operator/usecases/template.md",
          },
          {
            text: "Deploying Templates to Namespaces",
            link: "/content/sre/multi-tenant-operator/usecases/deploying-templates.md",
          },
          {
            text: "Mapping Resources via Template",
            link: "/content/sre/multi-tenant-operator/usecases/mapping-resources.md",
          },
          {
            text: "Configuring Multi-Tenant Isolation with Network Policy Template",
            link: "/content/sre/multi-tenant-operator/usecases/configuring-multitenant-network-isolation.md",
          },
          {
            text: "Distributing Secrets using Sealed Secrets Template",
            link: "/content/sre/multi-tenant-operator/usecases/distributing-secrets-using-sealed-secret-template.md",
          },
          {
            text: "Configuring IntegrationConfig",
            link: "/content/sre/multi-tenant-operator/usecases/integrationconfig.md",
          },
          {
            text: "Creating ArgoCD AppProjects",
            link: "/content/sre/multi-tenant-operator/usecases/argocd.md",
          },
          {
            text: "Creating Mattermost Teams",
            link: "/content/sre/multi-tenant-operator/usecases/mattermost.md",
          },
          {
            text: "Extending Manager ClusterRole",
            link: "/content/sre/multi-tenant-operator/usecases/manager-clusterrole",
          },
          {
            text: "Freeing up unused Resources",
            link: "/content/sre/multi-tenant-operator/usecases/hibernation.md",
          },
          {
            text: "Create Private Sandboxes",
            link: "/content/sre/multi-tenant-operator/usecases/private-sandboxes.md",
          },
        ],
      },
      "/content/sre/multi-tenant-operator/hibernation.md",
      "/content/sre/multi-tenant-operator/argocd-multitenancy.md",
      "/content/sre/multi-tenant-operator/vault-multitenancy.md",
      "/content/sre/multi-tenant-operator/changelog.md",
      "/content/sre/multi-tenant-operator/troubleshooting.md",
      "/content/sre/multi-tenant-operator/faq.md",
    ],
  },
  {
    text: "Tronador",
    collapsible: true,
    children: [
      "/content/sre/tronador/overview.md",
      "/content/sre/tronador/environment_provisioner.md",
      "/content/sre/tronador/environment.md",
      "/content/sre/tronador/tronador_config.md",
      "/content/sre/tronador/config_file.md",
      "/content/sre/tronador/cluster_task.md",
      "/content/sre/tronador/workflow.md",
      "/content/sre/tronador/troubleshooting.md",
      "/content/sre/tronador/changelog.md",
    ],
  },
  {
    text: "Support",
    collapsible: true,
    children: ["/content/sre/support/support.md"],
  },
  {
    text: "Frequently Asked Questions",
    collapsible: true,
    children: [
      "/content/sre/faq/product.md",
      "/content/sre/faq/operations.md",
      "/content/sre/faq/purchasing.md",
      "/content/sre/faq/customization.md",
      "/content/sre/faq/developers.md",
    ],
  },
];
