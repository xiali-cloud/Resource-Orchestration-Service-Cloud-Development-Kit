import * as ros from '@alicloud/ros-cdk-core';
import { RosLogstores } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLogstores as LogstoresProperty };

/**
 * Properties for defining a `DATASOURCE::SLS::Logstores`
 */
export interface LogstoresProps {

    /**
     * Property project: Project name.
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property logstoreName: Logstore name.
     */
    readonly logstoreName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::SLS::Logstores`
 */
export class Logstores extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Logstores: The list of logstores.
     */
    public readonly attrLogstores: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::SLS::Logstores`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogstoresProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLogstores = new RosLogstores(this, id,  {
            project: props.project,
            logstoreName: props.logstoreName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogstores;
        this.attrLogstores = rosLogstores.attrLogstores;
    }
}
