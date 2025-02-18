using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SAE::Applications`.</summary>
    [JsiiInterface(nativeType: typeof(IApplicationsProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.ApplicationsProps")]
    public interface IApplicationsProps
    {
        /// <summary>Property appName: The name of application.</summary>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fieldType: Set the dimension of the filter application.</summary>
        /// <remarks>
        /// Valid values:
        /// appName: The application name.
        /// appIds: App IDs.
        /// slbIps: SLB IP address.
        /// instanceIps: Instance IP address.
        /// </remarks>
        [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FieldType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.</summary>
        [JsiiProperty(name: "fieldValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FieldValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceId: The ID of namespace.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::SAE::Applications`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IApplicationsProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.ApplicationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.IApplicationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appName: The name of application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fieldType: Set the dimension of the filter application.</summary>
            /// <remarks>
            /// Valid values:
            /// appName: The application name.
            /// appIds: App IDs.
            /// slbIps: SLB IP address.
            /// instanceIps: Instance IP address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FieldType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fieldValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FieldValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceId: The ID of namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
