using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.AccountPrivilegeProps")]
    public class AccountPrivilegeProps : AlibabaCloud.SDK.ROS.CDK.Rds.IAccountPrivilegeProps
    {
        /// <summary>Property accountName: RDS account name.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountName
        {
            get;
            set;
        }

        /// <summary>Property accountPrivilege: RDS account privilege.</summary>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountPrivilege
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceId: RDS instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property dbName: RDS database name.</summary>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbName
        {
            get;
            set;
        }
    }
}
