---
title: Cloud Integration 
description:  This topic helps you seamlessly set up your Harness CCM with a single click for your existing Kubernetes clusters, and integrate CCM with your cloud service providers.
# sidebar_position: 2
helpdocs_topic_id: g9dgxg2cc6
helpdocs_category_id: ekrjjfyle0
helpdocs_is_private: false
helpdocs_is_published: true
---

Cloud Integration allows you to seamlessly set up your Harness CCM with a single click for your existing Kubernetes clusters, and integrate cost management with your cloud service providers.

## Prerequisites and Permissions

* See [Roles and Policies for the Connector](/docs/platform/Connectors/Cloud-providers/add-a-kubernetes-cluster-connector#review-roles-and-policies-for-the-connector) to learn about the IAM roles and policies that you need to be assigned to be able to create a connector.
* See [Prerequisites](set-up-cost-visibility-for-kubernetes.md#prerequisites) to learn about the tasks that you need to perform before setting up Cloud Costs Management for your Kubernetes cluster.

## Creating the Kubernetes connector manually using the Advanced option

Harness Cloud Cost Management (CCM) monitors the cloud costs of your Kubernetes clusters, namespaces, nodes, workloads, and labels. You need to create a connector to enable Cloud Cost Management. To create the connector using advanced options, perform the following steps:

1. In your Harness account, click **Cloud Costs**. 
2. Under **Setup**, click **Cloud Integration**.  
The **Cloud Integration** page displays the existing connectors for the Kubernetes clusters and the cloud accounts.
2. Click **New Cluster/Cloud account.**
3. Click **Advanced**.
4. For further instructions, go to [Add a Kubernetes Cluster Connector](/docs/platform/Connectors/Cloud-providers/add-a-kubernetes-cluster-connector) and [Set up CCM for Kubernetes](set-up-cost-visibility-for-kubernetes.md).

## Creating the Kubernetes connector using the Quick Create option

The Kubernetes Quick Create option is recommended especially for first-time users and for users who would like to test Harness CCM on their Kubernetes clusters. You can set up Harness CCM on your cluster effortlessly using this option. The following entities are created in this process:

* A Kubernetes delegate of medium size with cluster admin permissions.
* A Kubernetes connector which can also be used for other Harness modules such as CI, CD, and so on.
* Cost Visibility is enabled on this Kubernetes connector.

To use the **Quick Create** option, perform the following steps:

1. In your Harness account, click **Cloud Costs.** Under **Setup,** click **Cloud Integration**.  
The **Cloud Integration** page displays the existing connectors for the Kubernetes clusters and the cloud accounts.
2. Click **New Cluster/Cloud account**.
3. Select **Kubernetes**.
4. Click **Quick Create**.
5. In the **Kubernetes Connector** wizard, enter a **name** for the connector.
6. If the cluster does not already have additional permissions, you need to apply them now. See Delegate Permissions in [Prerequisites](set-up-cost-visibility-for-kubernetes.md#prerequisites) for additional details.
	1. In **Provide Permissions**, click **Download YAML**.
	2. Copy the downloaded YAML to a machine where you have `kubectl`installed and have access to your Kubernetes cluster.
	3. Run the following command to create a Kubernetes Delegate with Cluster Admin Role and a connector referencing the delegate.
	```
	$ kubectl apply -f harness-delegate.yml
	```
	4. Click **Continue**.
	5. In **Create and Test connection**, after the successful creation of delegate and the connectors, and verification of permissions, click **Finish**. The connector is now listed in the Kubernetes clusters table.

## Enabling cloud cost on your cluster

To enable cloud cost for your Kubernetes clusters, perform the following steps:

1. In your Harness account, click **Cloud Costs**. Under **Setup,** click **Cloud Integration**.  
The **Cloud Integration** page displays the existing connectors for the Kubernetes clusters and the cloud accounts.
2. To enable cloud costs for a Kubernetes cluster, click **Enable Cloud Costs** for the Kubernetes Connector.  
The required permissions and components are verified. On successful verification, the cost management features are enabled on the cluster.

  ![](./static/use-cloud-integration-00.gif)
1. (Optional) To enable the AutoStopping feature, click **Enable AutoStopping** before clicking **Finish** and continue to follow the steps in the wizard or you could choose to enable this feature later if required. To learn how to enable AutoStopping, see [Create a secret and provide permissions for AutoStopping](set-up-cost-visibility-for-kubernetes.md#optional-create-a-secret).

### Viewing Cloud Costs

To view the cloud spend data for the Kubernetes cluster, click **View costs** for the cluster on the **Cloud Integration** page. The Perspective page displays your cloud costs data along with recommendations to reduce your spend. For more information, see [Cost Perspectives](../../3-use-ccm-cost-reporting/1-ccm-perspectives/1-create-cost-perspectives.md).

### Editing a Kubernetes connector

To edit an existing connector, perform the following steps:

1. In your Harness account, click **Cloud Costs****.** Under **Setup,** click **Cloud Integration**.  
The **Cloud Integration** page displays the existing connectors for the Kubernetes clusters and the cloud accounts.
2. Click the three dots against the cluster and click **Edit Connector**.  
The **Kubernetes cluster** wizard opens.
3. After updating the required details, click **Save and Continue** to test the connection.
4. Click **Finish** after successful verification of the connection.

### Disabling Cost Reporting and AutoStopping on your cluster

To disable cost reporting on your Kubernetes cluster, perform the following steps:

1. In your Harness account, click **Cloud Costs.** Under **Setup**, click **Cloud Integration**.  
The **Cloud Integration** page displays the existing connectors for the Kubernetes clusters and the cloud accounts.
2. Click the three dots against the cluster and click **Edit cost access features**.  
The **Enable Cloud Costs** wizard opens.
3. Click **Disable Cost Reporting**.
4. If you want to disable AutoStopping, click **Manage AutoStopping** and then, click **Disable AutoStopping**.

### Deleting a Kubernetes connector

To delete a connector, perform the following steps:

1. In your Harness account, click **Cloud Costs****.** Under **Setup,** click **Cloud Integration**.  
The **Cloud Integration** page displays the existing connectors for the Kubernetes clusters and the cloud accounts.
2. Click the three dots against the cluster and click **Delete Connector**.
3. Click **Delete** in the confirmation dialog box.

## Integrate CCM with your cloud account
To set up CCM for your cloud accounts, go to the following topics:
* [AWS](set-up-cost-visibility-for-aws.md)
* [Azure](set-up-cost-visibility-for-azure.md)
* [GCP](set-up-cost-visibility-for-gcp.md)