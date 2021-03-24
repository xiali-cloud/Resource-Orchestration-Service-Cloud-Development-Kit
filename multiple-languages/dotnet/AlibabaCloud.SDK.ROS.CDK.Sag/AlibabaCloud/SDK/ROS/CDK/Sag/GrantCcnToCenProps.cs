using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.GrantCcnToCenProps")]
    public class GrantCcnToCenProps : AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCenProps
    {
        /// <summary>Property ccnInstanceId: The ID of the CCN instance.</summary>
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CcnInstanceId
        {
            get;
            set;
        }

        /// <summary>Property cenInstanceId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenInstanceId
        {
            get;
            set;
        }

        /// <summary>Property cenUid: The ID of the account to which the CEN instance belongs.</summary>
        [JsiiProperty(name: "cenUid", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenUid
        {
            get;
            set;
        }
    }
}
