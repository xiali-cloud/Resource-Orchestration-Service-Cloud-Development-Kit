import * as ros from '@alicloud/ros-cdk-core';
import { RosTrigger } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrigger as TriggerProperty };

/**
 * Properties for defining a `ALIYUN::FC::Trigger`
 */
export interface TriggerProps {

    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
     */
    readonly triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property triggerName: Trigger name.
     * Example : "image_resize"
     */
    readonly triggerName: string | ros.IResolvable;

    /**
     * Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
     * Example : "oss"
     */
    readonly triggerType: string | ros.IResolvable;

    /**
     * Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
     * Example : "acs:ram::1234567890:role/fc-test"
     */
    readonly invocationRole?: string | ros.IResolvable;

    /**
     * Property qualifier: service version or alias.
     * Example : "LATEST"
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    readonly sourceArn?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::FC::Trigger`
 */
export class Trigger extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FunctionName: Function name.
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * Attribute ServiceName: Service name.
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * Attribute TriggerId: The trigger ID.
     */
    public readonly attrTriggerId: ros.IResolvable;

    /**
     * Attribute TriggerName: Trigger name.
     */
    public readonly attrTriggerName: ros.IResolvable;

    /**
     * Attribute UrlInternet: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    public readonly attrUrlInternet: ros.IResolvable;

    /**
     * Attribute UrlIntranet: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    public readonly attrUrlIntranet: ros.IResolvable;

    /**
     * Create a new `ALIYUN::FC::Trigger`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTrigger = new RosTrigger(this, id,  {
            functionName: props.functionName,
            triggerType: props.triggerType,
            triggerName: props.triggerName,
            sourceArn: props.sourceArn,
            serviceName: props.serviceName,
            triggerConfig: props.triggerConfig,
            invocationRole: props.invocationRole,
            qualifier: props.qualifier,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrigger;
        this.attrFunctionName = rosTrigger.attrFunctionName;
        this.attrServiceName = rosTrigger.attrServiceName;
        this.attrTriggerId = rosTrigger.attrTriggerId;
        this.attrTriggerName = rosTrigger.attrTriggerName;
        this.attrUrlInternet = rosTrigger.attrUrlInternet;
        this.attrUrlIntranet = rosTrigger.attrUrlIntranet;
    }
}
