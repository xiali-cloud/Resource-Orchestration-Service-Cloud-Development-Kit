using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneRecord`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.RosZoneRecordProps")]
    public class RosZoneRecordProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneRecordProps
    {
        /// <remarks>
        /// <strong></strong>: " instead of empty
        /// 
        /// <strong>Property</strong>: rr: Host record, if you want to resolve
        /// </remarks>
        [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Rr
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: Allowed values: [ENABLE, DISABLE]
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Status
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: value: Record value
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Value
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone Id
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: MX record priority, value range [1,99]. Default to 10.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ttl: Survival time, default is 60
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Ttl
        {
            get;
            set;
        }
    }
}
