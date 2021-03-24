using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::FileSystem`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.RosFileSystemProps")]
    public class RosFileSystemProps : AlibabaCloud.SDK.ROS.CDK.Nas.IRosFileSystemProps
    {
        /// <remarks>
        /// <strong>Property</strong>: protocolType: Type of protocol used. Currently includes the NFS type and the SMB type
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProtocolType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageType: The file system type. Currently includes the Performance type and the Capacity type
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string StorageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: Maximum file system throughput, unit is MB/s. Required and valid only when FileSystemType=cpfs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: capacity: File system capacity, the unit is GB. Required and valid when FileSystemType=extreme or cpfs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Capacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: Type of payment:
        /// PayAsYouGo (pay as you go)
        /// Subscription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: File system description (space characters are not allowed)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
        /// When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptType: Specifies whether to encrypt data. You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
        /// 0: specifies that no encryption is applied to data on the file system.
        /// 1: specifies that encryption is applied to data on the file system.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptType", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? EncryptType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: fileSystemType: File system type. Allowed values: standard, extreme, cpfs
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? FileSystemType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: snapshotId: Snapshot ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnapshotId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: Vpc ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone ID.
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
