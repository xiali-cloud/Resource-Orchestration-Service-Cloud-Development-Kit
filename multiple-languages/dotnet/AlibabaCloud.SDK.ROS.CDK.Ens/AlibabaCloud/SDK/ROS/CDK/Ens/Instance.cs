using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>A ROS resource type:  `ALIYUN::ENS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ens.Instance), fullyQualifiedName: "@alicloud/ros-cdk-ens.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ens.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ENS::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ens.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.</summary>
        [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoRenew
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoRenewPeriod: The time period of auto renew.</summary>
        /// <remarks>
        /// it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "attrAutoRenewPeriod", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoRenewPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB.</summary>
        /// <remarks>
        /// If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiProperty(name: "attrDataDiskSize", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDataDiskSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnsRegionId: ENS Region Id.</summary>
        [JsiiProperty(name: "attrEnsRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEnsRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostName: The hostname of the instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageId: Image ID to create ens instance.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrImageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: InstanceId.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceName: Instance name.</summary>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.</summary>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.</summary>
        [JsiiProperty(name: "attrIpType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute KeyPairName: SSH key pair name.</summary>
        [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrKeyPairName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: Payment Type.only support value Subscription.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Period: Prepaid time period.</summary>
        /// <remarks>
        /// Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "attrPeriod", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIpAddress: Private IP for the instance created.</summary>
        [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIps: Private IP.</summary>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIps: Public IP.</summary>
        [JsiiProperty(name: "attrPublicIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Quantity: number of instances to create.</summary>
        [JsiiProperty(name: "attrQuantity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrQuantity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SystemDiskSize: Disk size of the system disk.</summary>
        [JsiiProperty(name: "attrSystemDiskSize", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSystemDiskSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.</summary>
        /// <remarks>
        /// The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        /// </remarks>
        [JsiiProperty(name: "attrUniqueSuffix", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUniqueSuffix
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserData: User data to pass to instance.</summary>
        /// <remarks>
        /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiProperty(name: "attrUserData", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserData
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The vSwitch Id to create ens instance.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
