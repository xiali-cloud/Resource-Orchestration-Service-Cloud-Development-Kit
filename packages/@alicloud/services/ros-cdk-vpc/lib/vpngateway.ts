import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpnGateway as VpnGatewayProperty };

/**
 * Properties for defining a `ALIYUN::VPC::VpnGateway`
 */
export interface VpnGatewayProps {

    /**
     * Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * true: Automatically pays the bill for the VPN gateway.
     * false: Does not automatically pay the bill for the VPN gateway.
     * Default true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
     * If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
     * You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
     * For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
     * For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
     */
    readonly disasterRecoveryVSwitchId?: string | ros.IResolvable;

    /**
     * Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    readonly enableIpsec?: boolean | ros.IResolvable;

    /**
     * Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    readonly enableSsl?: boolean | ros.IResolvable;

    /**
     * Property instanceChargeType: Accounting type of the VPN gateway, the value is:
     * PREPAY, POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property networkType: The network type of the VPN gateway. Valid values: public|private
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    readonly sslConnections?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpnGateway.TagsProperty[];

    /**
     * Property vpnType: VPN gateway type.
     */
    readonly vpnType?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::VpnGateway`
 */
export class VpnGateway extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    public readonly attrDisasterRecoveryInternetIp: ros.IResolvable;

    /**
     * Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    public readonly attrDisasterRecoveryVSwitchId: ros.IResolvable;

    /**
     * Attribute InternetIp: The public IP address of the VPN gateway.
     */
    public readonly attrInternetIp: ros.IResolvable;

    /**
     * Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute Spec: The specification of the VPN gateway.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    public readonly attrSslMaxConnections: ros.IResolvable;

    /**
     * Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
     */
    public readonly attrSslVpnInternetIp: ros.IResolvable;

    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VpnGatewayId: ID of the VPN gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    /**
     * Attribute VpnType: The type of the VPN gateway.
     */
    public readonly attrVpnType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpnGateway = new RosVpnGateway(this, id,  {
            enableIpsec: props.enableIpsec === undefined || props.enableIpsec === null ? true : props.enableIpsec,
            enableSsl: props.enableSsl === undefined || props.enableSsl === null ? false : props.enableSsl,
            vpnType: props.vpnType,
            sslConnections: props.sslConnections,
            disasterRecoveryVSwitchId: props.disasterRecoveryVSwitchId,
            description: props.description,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PREPAY' : props.instanceChargeType,
            vSwitchId: props.vSwitchId,
            period: props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            name: props.name,
            vpcId: props.vpcId,
            networkType: props.networkType,
            bandwidth: props.bandwidth,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnGateway;
        this.attrDisasterRecoveryInternetIp = rosVpnGateway.attrDisasterRecoveryInternetIp;
        this.attrDisasterRecoveryVSwitchId = rosVpnGateway.attrDisasterRecoveryVSwitchId;
        this.attrInternetIp = rosVpnGateway.attrInternetIp;
        this.attrOrderId = rosVpnGateway.attrOrderId;
        this.attrSpec = rosVpnGateway.attrSpec;
        this.attrSslMaxConnections = rosVpnGateway.attrSslMaxConnections;
        this.attrSslVpnInternetIp = rosVpnGateway.attrSslVpnInternetIp;
        this.attrVSwitchId = rosVpnGateway.attrVSwitchId;
        this.attrVpcId = rosVpnGateway.attrVpcId;
        this.attrVpnGatewayId = rosVpnGateway.attrVpnGatewayId;
        this.attrVpnType = rosVpnGateway.attrVpnType;
    }
}
