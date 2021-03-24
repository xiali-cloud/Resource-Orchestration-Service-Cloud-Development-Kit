using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenBandwidthPackageProps")]
    public class CenBandwidthPackageProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenBandwidthPackageProps
    {
        /// <summary>Property bandwidth: The bandwidth in Mbps of the bandwidth package.</summary>
        /// <remarks>
        /// The bandwidth cannot be less than 2 Mbps.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <summary>Property geographicRegionAId: The other area A to connect.</summary>
        /// <remarks>
        /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
        /// </remarks>
        [JsiiProperty(name: "geographicRegionAId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GeographicRegionAId
        {
            get;
            set;
        }

        /// <summary>Property geographicRegionBId: The other area B to connect.</summary>
        /// <remarks>
        /// Valid value: China | North-America | Asia-Pacific | Europe | Australia
        /// </remarks>
        [JsiiProperty(name: "geographicRegionBId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GeographicRegionBId
        {
            get;
            set;
        }

        /// <summary>Property autoPay: Whether to automatically pay the bill.</summary>
        /// <remarks>
        /// Valid value:
        /// true
        /// false (Default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled.</summary>
        /// <remarks>
        /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property autoRenewDuration: Duration of each automatic renewals.</summary>
        /// <remarks>
        /// It takes effect when AutoRenew is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AutoRenewDuration
        {
            get;
            set;
        }

        /// <summary>Property bandwidthPackageChargeType: The billing method.</summary>
        /// <remarks>
        /// Valid value: PREPAY, POSTPAY (Default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthPackageChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BandwidthPackageChargeType
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the bandwidth package.</summary>
        /// <remarks>
        /// The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the bandwidth package.</summary>
        /// <remarks>
        /// The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property period: The purchase period.</summary>
        /// <remarks>
        /// The default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: The pricing cycle.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PricingCycle
        {
            get;
            set;
        }
    }
}
