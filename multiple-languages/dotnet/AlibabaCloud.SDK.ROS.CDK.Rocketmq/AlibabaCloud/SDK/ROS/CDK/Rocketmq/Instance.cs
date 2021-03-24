using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    /// <summary>A ROS resource type:  `ALIYUN::ROCKETMQ::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Rocketmq.Instance), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-rocketmq.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ROCKETMQ::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Rocketmq.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.</summary>
        [JsiiProperty(name: "attrHttpInternalEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpInternalEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.</summary>
        [JsiiProperty(name: "attrHttpInternetEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpInternetEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.</summary>
        [JsiiProperty(name: "attrHttpInternetSecureEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpInternetSecureEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: Instance ID created.</summary>
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

        /// <summary>Attribute InstanceType: Instance Type.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.</summary>
        [JsiiProperty(name: "attrTcpEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTcpEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
