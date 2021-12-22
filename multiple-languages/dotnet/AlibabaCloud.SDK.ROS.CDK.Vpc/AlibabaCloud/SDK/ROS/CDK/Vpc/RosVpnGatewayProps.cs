using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::VpnGateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosVpnGatewayProps")]
    public class RosVpnGatewayProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        /// Value: 5|10|20|50|100|200.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID to which the VPN gateway belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        /// true: Automatically pays the bill for the VPN gateway.
        /// false (default): Does not automatically pay the bill for the VPN gateway.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the VPN gateway.
        /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        /// True (default): Enables the IPsec-VPN feature.
        /// False: The IPsec-VPN function is not enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableIpsec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableIpsec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        /// True: Enable SSL-VPN.
        /// False (default): Does not enable SSL-VPN.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableSsl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: Accounting type of the VPN gateway, the value is:
        /// PREPAY, POSTPAY
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        /// The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Purchase time, value: 1~9|12|24|36.
        /// When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sslConnections: The maximum number of clients allowed to connect at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SslConnections
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnGateway.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VSwitchId
        {
            get;
            set;
        }
    }
}
