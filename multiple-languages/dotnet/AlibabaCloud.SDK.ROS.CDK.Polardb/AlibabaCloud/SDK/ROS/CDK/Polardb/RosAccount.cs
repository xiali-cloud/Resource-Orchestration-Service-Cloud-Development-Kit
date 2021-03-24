using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>A ROS template type:  `ALIYUN::POLARDB::Account`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.RosAccount), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAccount", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-polardb.RosAccountProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAccount : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::POLARDB::Account`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAccount(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosAccountProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAccount(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAccount(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.RosAccount))!;

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the database account. The name must comply with the following rules:
        /// - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        /// - It can be up to 16 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AccountName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: The password of the database account. The password must comply with the following rules:
        /// - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        /// - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        /// - It must be 8 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AccountPassword
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DbClusterId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <summary>A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.</summary>
        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: The description of the database account. The description must comply with the following rules:
        /// - It cannot start with http:// or https://.
        /// - It must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AccountDescription
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPrivilege: The permissions of the database account on the database. Valid values:
        /// ReadWrite: has read and write permissions on the database.
        /// ReadOnly: has the read-only permission on the database.
        /// DMLOnly: runs only data manipulation language (DML) statements.
        /// DDLOnly: runs only data definition language (DDL) statements.
        /// Default value: ReadWrite.
        /// Separate multiple permissions with a comma (,).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AccountPrivilege
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accountType: The type of the database account. Valid values:
        /// - Normal: standard account
        /// - Super: privileged account
        /// Default value: Super.
        /// Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        /// You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AccountType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
    }
}
