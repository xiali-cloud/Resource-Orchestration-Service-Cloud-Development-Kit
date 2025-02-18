using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OOS::SecretParameters`.</summary>
    [JsiiInterface(nativeType: typeof(ISecretParametersProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.SecretParametersProps")]
    public interface ISecretParametersProps
    {
        /// <summary>Property resourceGroupId: The ID of resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretParameterName: The name of the encryption parameter.</summary>
        [JsiiProperty(name: "secretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretParameterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::OOS::SecretParameters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecretParametersProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.SecretParametersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ISecretParametersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceGroupId: The ID of resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretParameterName: The name of the encryption parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretParameterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
