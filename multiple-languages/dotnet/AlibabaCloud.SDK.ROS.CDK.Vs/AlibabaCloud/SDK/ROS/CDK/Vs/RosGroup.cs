using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    /// <summary>A ROS template type:  `ALIYUN::VS::Group`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vs.RosGroup), fullyQualifiedName: "@alicloud/ros-cdk-vs.RosGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vs.RosGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::VS::Group`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vs.IRosGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosGroup(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Vs.RosGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: GbId: GB ID space provided. (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGbId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: GbIp: GB signaling server address space provided. (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGbIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: GbPort: GB Port space provided. (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGbPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Id: Space ID.
        /// </remarks>
        [JsiiProperty(name: "attrId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: inProtocol: Access protocol used by the space.
        /// Value: gb28181, rtmp
        /// </remarks>
        [JsiiProperty(name: "inProtocol", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string InProtocol
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Space name.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Name
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: outProtocol: Play protocol used by the space, multivalued separated by commas.
        /// Value: flv, hls, rtmp
        /// </remarks>
        [JsiiProperty(name: "outProtocol", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string OutProtocol
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: playDomain: Use of the domain name space broadcast stream.
        /// </remarks>
        [JsiiProperty(name: "playDomain", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PlayDomain
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: pushDomain: Plug flow domain name space to use. (Only access to the space rtmp)
        /// </remarks>
        [JsiiProperty(name: "pushDomain", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PushDomain
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: region: Space belongs to the region, as a service center.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Region
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: app: Application name space used, the default live.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "app", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? App
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: callback: Updating the space callback device / flow state
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "callback", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Callback
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Space description.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: enabled: Space is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Enabled
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: lazyPull: Whether to enable on-demand pull flow, default false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lazyPull", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? LazyPull
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
    }
}
