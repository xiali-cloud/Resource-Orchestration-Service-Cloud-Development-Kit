using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>A ROS resource type:  `ALIYUN::ResourceManager::Folder`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Resourcemanager.Folder), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.Folder", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.FolderProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Folder : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ResourceManager::Folder`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Folder(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Folder(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Folder(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute FolderId: The ID of the folder.</summary>
        [JsiiProperty(name: "attrFolderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFolderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FolderName: The name of the folder.</summary>
        [JsiiProperty(name: "attrFolderName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFolderName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ParentFolderId: The ID of the parent folder.</summary>
        /// <remarks>
        /// If not set, the system default value will be used
        /// </remarks>
        [JsiiProperty(name: "attrParentFolderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrParentFolderId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
