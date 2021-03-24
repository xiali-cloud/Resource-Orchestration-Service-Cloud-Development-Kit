using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>A ROS resource type:  `ALIYUN::POLARDB::DBClusterEndpoint`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.DBClusterEndpoint), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBClusterEndpoint", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-polardb.DBClusterEndpointProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DBClusterEndpoint : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::POLARDB::DBClusterEndpoint`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public DBClusterEndpoint(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBClusterEndpointProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBClusterEndpoint(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DBClusterEndpoint(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Addresses: The address items of the db cluster endpoint.</summary>
        [JsiiProperty(name: "attrAddresses", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAddresses
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionString: The first connection string of the db cluster endpoint.</summary>
        [JsiiProperty(name: "attrConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBEndpointId: DB cluster endpoint ID.</summary>
        /// <remarks>
        /// E.g. pe-xxxxxxxx.
        /// </remarks>
        [JsiiProperty(name: "attrDbEndpointId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbEndpointId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
