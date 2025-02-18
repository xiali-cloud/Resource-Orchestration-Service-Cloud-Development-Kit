using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::PAI::Workspaces`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkspacesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.WorkspacesProps")]
    public interface IWorkspacesProps
    {
        /// <summary>Property workspaceId: The ID of the workspace.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workspaceName: The workspace name.</summary>
        /// <remarks>
        /// The format is as follows:
        ///
        /// <list type="bullet">
        /// <description>3 to 23 characters in length and can contain letters, underscores, or numbers.</description>
        /// <description>Must start with a large or small letter.</description>
        /// <description>Unique in the current region.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::PAI::Workspaces`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWorkspacesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.WorkspacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property workspaceId: The ID of the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workspaceName: The workspace name.</summary>
            /// <remarks>
            /// The format is as follows:
            ///
            /// <list type="bullet">
            /// <description>3 to 23 characters in length and can contain letters, underscores, or numbers.</description>
            /// <description>Must start with a large or small letter.</description>
            /// <description>Unique in the current region.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
