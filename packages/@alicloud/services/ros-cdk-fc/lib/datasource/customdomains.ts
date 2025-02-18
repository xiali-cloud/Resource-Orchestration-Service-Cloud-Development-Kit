import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomains } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomDomains as CustomDomainsProperty };

/**
 * Properties for defining a `DATASOURCE::FC::CustomDomains`
 */
export interface CustomDomainsProps {

    /**
     * Property prefix: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::FC::CustomDomains`
 */
export class CustomDomains extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CustomDomains: The list of custom_domain.
     */
    public readonly attrCustomDomains: ros.IResolvable;

    /**
     * Attribute DomainNames: The list of custom_domain names.
     */
    public readonly attrDomainNames: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::FC::CustomDomains`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCustomDomains = new RosCustomDomains(this, id,  {
            prefix: props.prefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomains;
        this.attrCustomDomains = rosCustomDomains.attrCustomDomains;
        this.attrDomainNames = rosCustomDomains.attrDomainNames;
    }
}
