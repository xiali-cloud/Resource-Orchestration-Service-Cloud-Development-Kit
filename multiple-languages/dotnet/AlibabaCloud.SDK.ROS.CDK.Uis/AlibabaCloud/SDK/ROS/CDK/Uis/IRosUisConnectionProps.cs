using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>Properties for defining a `ALIYUN::UIS::UisConnection`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUisConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnectionProps")]
    public interface IRosUisConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: uisNodeId: Node instance ID.
        /// </remarks>
        [JsiiProperty(name: "uisNodeId", typeJson: "{\"primitive\":\"string\"}")]
        string UisNodeId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
        /// </remarks>
        [JsiiProperty(name: "uisProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string UisProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: A description of the tunnel connection.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: greConfig: The config for GRE. Item can be overwritten, but removed.
        /// </remarks>
        [JsiiProperty(name: "greConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GreConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the tunnel connection.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sslConfig: The config for SSLVPN.
        /// </remarks>
        [JsiiProperty(name: "sslConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SslConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::UIS::UisConnection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosUisConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Uis.IRosUisConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: uisNodeId: Node instance ID.
            /// </remarks>
            [JsiiProperty(name: "uisNodeId", typeJson: "{\"primitive\":\"string\"}")]
            public string UisNodeId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
            /// </remarks>
            [JsiiProperty(name: "uisProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string UisProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: A description of the tunnel connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: greConfig: The config for GRE. Item can be overwritten, but removed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "greConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? GreConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the tunnel connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sslConfig: The config for SSLVPN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sslConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty\"}]}}", isOptional: true)]
            public object? SslConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
