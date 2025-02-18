using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OOS::PatchBaselines`.</summary>
    [JsiiInterface(nativeType: typeof(IRosPatchBaselinesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosPatchBaselinesProps")]
    public interface IRosPatchBaselinesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: operationSystem: Operating system type.
        /// </remarks>
        [JsiiProperty(name: "operationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationSystem
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: patchBaselineName: The name of the patch baseline.
        /// </remarks>
        [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PatchBaselineName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shareType: Patch baseline sharing type.
        /// </remarks>
        [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShareType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::OOS::PatchBaselines`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosPatchBaselinesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosPatchBaselinesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IRosPatchBaselinesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: operationSystem: Operating system type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "operationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OperationSystem
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: patchBaselineName: The name of the patch baseline.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PatchBaselineName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shareType: Patch baseline sharing type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShareType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
