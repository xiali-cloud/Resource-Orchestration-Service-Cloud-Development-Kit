using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::MONGODB::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mongodb.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceClass
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double DbInstanceStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupId: Specific backup set Id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: businessInfo: The business information. It is an additional parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "businessInfo", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BusinessInfo
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "couponNo", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CouponNo
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: databaseNames: The name of the database.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "databaseNames", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DatabaseNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceDescription: Description of created database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EngineVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NetworkType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readonlyReplicas", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ReadonlyReplicas
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "replicationFactor", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ReplicationFactor
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the ECS security group.
        /// Each ApsaraDB for MongoDB instance can be added in up to 10 security group. 
        /// You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpArray: Security ips to add or remove.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpArray", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpArray
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: srcDbInstanceId: Create an instance of the backup set based on an instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SrcDbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageEngine", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? StorageEngine
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id to create mongodb instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
        /// - true: enables password free.
        /// - false: disables password free.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcPasswordFree
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch Id to create mongodb instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
