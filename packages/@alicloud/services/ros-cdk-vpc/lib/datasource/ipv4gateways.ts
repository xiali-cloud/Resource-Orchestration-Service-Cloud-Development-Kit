import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv4Gateways } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpv4Gateways as Ipv4GatewaysProperty };

/**
 * Properties for defining a `DATASOURCE::VPC::Ipv4Gateways`
 */
export interface Ipv4GatewaysProps {

    /**
     * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    readonly ipv4GatewayId?: string | ros.IResolvable;

    /**
     * Property ipv4GatewayName: Resource name.
     */
    readonly ipv4GatewayName?: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::VPC::Ipv4Gateways`
 */
export class Ipv4Gateways extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    public readonly attrIpv4GatewayIds: ros.IResolvable;

    /**
     * Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    public readonly attrIpv4Gateways: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VPC::Ipv4Gateways`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv4GatewaysProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosIpv4Gateways = new RosIpv4Gateways(this, id,  {
            ipv4GatewayName: props.ipv4GatewayName,
            vpcId: props.vpcId,
            ipv4GatewayId: props.ipv4GatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateways;
        this.attrIpv4GatewayIds = rosIpv4Gateways.attrIpv4GatewayIds;
        this.attrIpv4Gateways = rosIpv4Gateways.attrIpv4Gateways;
    }
}
