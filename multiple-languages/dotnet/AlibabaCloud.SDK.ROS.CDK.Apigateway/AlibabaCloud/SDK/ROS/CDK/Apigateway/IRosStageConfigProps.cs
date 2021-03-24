using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::StageConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IRosStageConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosStageConfigProps")]
    public interface IRosStageConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: The name of the Stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
        string StageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: variables: Variables in the stage, key-value pairs.
        /// </remarks>
        [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Variables
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::StageConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosStageConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosStageConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosStageConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of the Group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stageName: The name of the Stage.
            /// </remarks>
            [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
            public string StageName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: variables: Variables in the stage, key-value pairs.
            /// </remarks>
            [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Variables
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
