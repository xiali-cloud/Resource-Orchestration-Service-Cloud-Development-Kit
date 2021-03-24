using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::Role`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RoleProps")]
    public class RoleProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRoleProps
    {
        /// <summary>Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.</summary>
        [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AssumeRolePolicyDocument
        {
            get;
            set;
        }

        /// <summary>Property roleName: Specifies the role name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RoleName
        {
            get;
            set;
        }

        /// <summary>Property description: Remark information, up to 1024 characters or Chinese characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property maxSessionDuration: The maximum session duration of the RAM role.</summary>
        /// <remarks>
        /// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        /// The default value is used if the parameter is not specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaxSessionDuration
        {
            get;
            set;
        }

        /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Policies
        {
            get;
            set;
        }
    }
}
