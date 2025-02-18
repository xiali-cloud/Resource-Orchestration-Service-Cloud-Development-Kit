import * as ros from '@alicloud/ros-cdk-core';
import { RosKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKubernetesCluster as KubernetesClusterProperty };

/**
 * Properties for defining a `ALIYUN::CS::KubernetesCluster`
 */
export interface KubernetesClusterProps {

    /**
     * Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
     * List size must be 3, Instance Type can be repeated.
     */
    readonly masterInstanceTypes: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
     */
    readonly masterVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property workerVSwitchIds: The virtual switch ID of the worker node.
     */
    readonly workerVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosKubernetesCluster.AddonsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
     * When PeriodUnit = Week, the values are: {"1", "2", "3"}
     * When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
     * Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property chargeType: cluster payment type. The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement. 
     * For more information, see CIS reinforcement.
     * Valid values:
     * true: enables CIS reinforcement.
     * false: disables CIS reinforcement.
     * Default value: false.
     */
    readonly cisEnabled?: boolean | ros.IResolvable;

    /**
     * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin:
     * true: indicates installation
     * false: Do not install
     * Default to false
     */
    readonly cloudMonitorFlags?: boolean | ros.IResolvable;

    /**
     * Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    readonly containerCidr?: string | ros.IResolvable;

    /**
     * Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
     */
    readonly cpuPolicy?: string | ros.IResolvable;

    /**
     * Property deletionProtection: Specifies whether to enable deletion protection for the cluster. 
     * After deletion protection is enabled, the cluster cannot be deleted 
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property disableRollback: Whether the failure was rolled back:
     * true: indicates that it fails to roll back
     * false: rollback failed
     * The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    readonly disableRollback?: boolean | ros.IResolvable;

    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server:
     * true: which means that the public network API Server is open.
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    readonly endpointPublicAccess?: boolean | ros.IResolvable;

    /**
     * Property formatDisk: Specifies whether to mount a data disk to nodes that are created 
     * on existing Elastic Compute Service (ECS) instances. Valid values:
     * true: stores the data of containers and images on a data disk. 
     * The original data on the disk will be overwritten. 
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last 
     * data disk is not initialized, the system automatically formats the data disk to ext4. 
     * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
     * The system does not create or mount a new data disk if no data disk has been 
     * mounted to the ECS instances.
     */
    readonly formatDisk?: boolean | ros.IResolvable;

    /**
     * Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. 
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    readonly isEnterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    readonly keepInstanceName?: boolean | ros.IResolvable;

    /**
     * Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
     */
    readonly keyPair?: string | ros.IResolvable;

    /**
     * Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    readonly kubernetesVersion?: string | ros.IResolvable;

    /**
     * Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    readonly loginPassword?: string | ros.IResolvable;

    /**
     * Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
     */
    readonly masterCount?: number | ros.IResolvable;

    /**
     * Property masterDataDisk: Whether the master node mounts data disks can be selected as:
     * true: mount the data disk
     * false: no data disk is mounted, default is false
     */
    readonly masterDataDisk?: boolean | ros.IResolvable;

    /**
     * Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
     */
    readonly masterDataDisks?: Array<RosKubernetesCluster.MasterDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property masterSystemDiskCategory: Master disk system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
     */
    readonly masterSystemDiskCategory?: string | ros.IResolvable;

    /**
     * Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
     * Valid values: PL0|PL1|PL2|PL3
     */
    readonly masterSystemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * Property masterSystemDiskSize: Master disk system disk size in GiB.
     * Default to 120.
     */
    readonly masterSystemDiskSize?: number | ros.IResolvable;

    /**
     * Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
     */
    readonly masterSystemDiskSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * Property masterZoneIds: Zone ids of master node virtual switches belongs to.
     */
    readonly masterZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. 
     * This number is determined by the specified pod CIDR block. 
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    readonly nodeCidrMask?: string | ros.IResolvable;

    /**
     * Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
     * - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
     * - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
     */
    readonly nodeNameMode?: string | ros.IResolvable;

    /**
     * Property nodePools: The configurations of Node pools.
     */
    readonly nodePools?: Array<RosKubernetesCluster.NodePoolsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property nodePortRange: Node service port. The value range is [30000, 65535].
     * Default to 30000-65535.
     */
    readonly nodePortRange?: string | ros.IResolvable;

    /**
     * Property numOfNodes: Number of worker nodes. The range is [0,300].
     * Default to 3.
     */
    readonly numOfNodes?: number | ros.IResolvable;

    /**
     * Property osType: The type of operating system. Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    readonly osType?: string | ros.IResolvable;

    /**
     * Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: When you specify PrePaid, you need to specify the period. The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property platform: The release version of the operating system. Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    readonly platform?: string | ros.IResolvable;

    /**
     * Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, 
     *  you must specify at least one pod vSwitch in the same zone. 
     *  The pod vSwitches cannot be the same as the node vSwitches. 
     *  We recommend that you set the mask length of the CIDR block to a value no 
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network 
     * plug-in is selected for the cluster.
     */
    readonly podVswitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
     */
    readonly proxyMode?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property runtime: The container runtime of the cluster. The default runtime is Docker.
     */
    readonly runtime?: RosKubernetesCluster.RuntimeProperty | ros.IResolvable;

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    readonly serviceCidr?: string | ros.IResolvable;

    /**
     * Property snatEntry: Whether to configure SNAT for the network.
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    readonly snatEntry?: boolean | ros.IResolvable;

    /**
     * Property socEnabled: Valid values:
     * true: enables reinforcement based on classified protection.
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    readonly socEnabled?: boolean | ros.IResolvable;

    /**
     * Property sshFlags: Whether to enable public network SSH login:
     * true: open
     * false: not open
     */
    readonly sshFlags?: boolean | ros.IResolvable;

    /**
     * Property tags: Tag the cluster.
     */
    readonly tags?: RosKubernetesCluster.TagsProperty[];

    /**
     * Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    readonly taint?: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
     */
    readonly timeoutMins?: number | ros.IResolvable;

    /**
     * Property timeZone: The time zone of the cluster.
     */
    readonly timeZone?: string | ros.IResolvable;

    /**
     * Property userCa: The CA of cluster
     */
    readonly userCa?: string | ros.IResolvable;

    /**
     * Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * Property workerDataDisk: Whether to mount the data disk. The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    readonly workerDataDisk?: boolean | ros.IResolvable;

    /**
     * Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
     */
    readonly workerDataDisks?: Array<RosKubernetesCluster.WorkerDataDisksProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
     */
    readonly workerInstanceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property workerSystemDiskCategory: Worker node system disk type. The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
     * Default to cloud_efficiency.
     */
    readonly workerSystemDiskCategory?: string | ros.IResolvable;

    /**
     * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * Default to 120.
     */
    readonly workerSystemDiskSize?: number | ros.IResolvable;

    /**
     * Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
     */
    readonly workerSystemDiskSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
     */
    readonly workerZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CS::KubernetesCluster`
 */
export class KubernetesCluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute APIServerSLBId: The id of API server SLB
     */
    public readonly attrApiServerSlbId: ros.IResolvable;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrDefaultUserKubeConfig: ros.IResolvable;

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    public readonly attrNodes: ros.IResolvable;

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    public readonly attrPrivateUserKubConfig: ros.IResolvable;

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * Attribute ScalingGroupId: Scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * Attribute ScalingRuleId: Scaling rule id
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    /**
     * Attribute TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
     */
    public readonly attrTaskId: ros.IResolvable;

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KubernetesClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosKubernetesCluster = new RosKubernetesCluster(this, id,  {
            endpointPublicAccess: props.endpointPublicAccess === undefined || props.endpointPublicAccess === null ? false : props.endpointPublicAccess,
            socEnabled: props.socEnabled,
            platform: props.platform,
            resourceGroupId: props.resourceGroupId,
            masterSystemDiskCategory: props.masterSystemDiskCategory === undefined || props.masterSystemDiskCategory === null ? 'cloud_ssd' : props.masterSystemDiskCategory,
            masterCount: props.masterCount === undefined || props.masterCount === null ? 3 : props.masterCount,
            sshFlags: props.sshFlags,
            loadBalancerSpec: props.loadBalancerSpec,
            name: props.name,
            taint: props.taint,
            masterDataDisks: props.masterDataDisks,
            isEnterpriseSecurityGroup: props.isEnterpriseSecurityGroup,
            runtime: props.runtime,
            masterZoneIds: props.masterZoneIds,
            osType: props.osType,
            nodeNameMode: props.nodeNameMode,
            workerZoneIds: props.workerZoneIds,
            proxyMode: props.proxyMode === undefined || props.proxyMode === null ? 'iptables' : props.proxyMode,
            disableRollback: props.disableRollback === undefined || props.disableRollback === null ? true : props.disableRollback,
            tags: props.tags,
            containerCidr: props.containerCidr === undefined || props.containerCidr === null ? '172.16.0.0/16' : props.containerCidr,
            cpuPolicy: props.cpuPolicy,
            keyPair: props.keyPair,
            nodeCidrMask: props.nodeCidrMask,
            period: props.period,
            deletionProtection: props.deletionProtection,
            timeZone: props.timeZone,
            vpcId: props.vpcId,
            nodePools: props.nodePools,
            userCa: props.userCa,
            snatEntry: props.snatEntry === undefined || props.snatEntry === null ? true : props.snatEntry,
            masterDataDisk: props.masterDataDisk === undefined || props.masterDataDisk === null ? false : props.masterDataDisk,
            masterSystemDiskSnapshotPolicyId: props.masterSystemDiskSnapshotPolicyId,
            periodUnit: props.periodUnit,
            formatDisk: props.formatDisk,
            userData: props.userData,
            autoRenew: props.autoRenew,
            addons: props.addons,
            masterSystemDiskSize: props.masterSystemDiskSize === undefined || props.masterSystemDiskSize === null ? 120 : props.masterSystemDiskSize,
            workerSystemDiskCategory: props.workerSystemDiskCategory === undefined || props.workerSystemDiskCategory === null ? 'cloud_efficiency' : props.workerSystemDiskCategory,
            nodePortRange: props.nodePortRange === undefined || props.nodePortRange === null ? '30000-65535' : props.nodePortRange,
            workerSystemDiskSize: props.workerSystemDiskSize === undefined || props.workerSystemDiskSize === null ? 120 : props.workerSystemDiskSize,
            masterVSwitchIds: props.masterVSwitchIds,
            cloudMonitorFlags: props.cloudMonitorFlags === undefined || props.cloudMonitorFlags === null ? false : props.cloudMonitorFlags,
            serviceCidr: props.serviceCidr === undefined || props.serviceCidr === null ? '172.19.0.0/20' : props.serviceCidr,
            podVswitchIds: props.podVswitchIds,
            workerInstanceTypes: props.workerInstanceTypes,
            loginPassword: props.loginPassword,
            autoRenewPeriod: props.autoRenewPeriod,
            kubernetesVersion: props.kubernetesVersion,
            masterInstanceTypes: props.masterInstanceTypes,
            masterSystemDiskPerformanceLevel: props.masterSystemDiskPerformanceLevel,
            workerDataDisks: props.workerDataDisks,
            securityGroupId: props.securityGroupId,
            timeoutMins: props.timeoutMins === undefined || props.timeoutMins === null ? 60 : props.timeoutMins,
            cisEnabled: props.cisEnabled,
            workerDataDisk: props.workerDataDisk === undefined || props.workerDataDisk === null ? false : props.workerDataDisk,
            numOfNodes: props.numOfNodes === undefined || props.numOfNodes === null ? 3 : props.numOfNodes,
            keepInstanceName: props.keepInstanceName,
            chargeType: props.chargeType,
            workerSystemDiskSnapshotPolicyId: props.workerSystemDiskSnapshotPolicyId,
            workerVSwitchIds: props.workerVSwitchIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKubernetesCluster;
        this.attrApiServerSlbId = rosKubernetesCluster.attrApiServerSlbId;
        this.attrClusterId = rosKubernetesCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosKubernetesCluster.attrDefaultUserKubeConfig;
        this.attrNodes = rosKubernetesCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosKubernetesCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosKubernetesCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosKubernetesCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosKubernetesCluster.attrScalingRuleId;
        this.attrTaskId = rosKubernetesCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosKubernetesCluster.attrWorkerRamRoleName;
    }
}
