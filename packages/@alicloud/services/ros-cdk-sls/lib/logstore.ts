import * as ros from '@alicloud/ros-cdk-core';
import { RosLogstore } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLogstore as LogstoreProperty };

/**
 * Properties for defining a `ALIYUN::SLS::Logstore`
 */
export interface LogstoreProps {

    /**
     * Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;

    /**
     * Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    readonly appendMeta?: boolean | ros.IResolvable;

    /**
     * Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    readonly autoSplit?: boolean | ros.IResolvable;

    /**
     * Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;

    /**
     * Property encryptConf: Data encryption config
     */
    readonly encryptConf?: RosLogstore.EncryptConfProperty | ros.IResolvable;

    /**
     * Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    readonly maxSplitShard?: number | ros.IResolvable;

    /**
     * Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;

    /**
     * Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;

    /**
     * Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLS::Logstore`
 */
export class Logstore extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute LogstoreName: Logstore name.
     */
    public readonly attrLogstoreName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogstoreProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLogstore = new RosLogstore(this, id,  {
            logstoreName: props.logstoreName,
            preserveStorage: props.preserveStorage === undefined || props.preserveStorage === null ? false : props.preserveStorage,
            projectName: props.projectName,
            appendMeta: props.appendMeta === undefined || props.appendMeta === null ? false : props.appendMeta,
            maxSplitShard: props.maxSplitShard,
            autoSplit: props.autoSplit === undefined || props.autoSplit === null ? false : props.autoSplit,
            enableTracking: props.enableTracking === undefined || props.enableTracking === null ? false : props.enableTracking,
            encryptConf: props.encryptConf,
            ttl: props.ttl === undefined || props.ttl === null ? 30 : props.ttl,
            shardCount: props.shardCount === undefined || props.shardCount === null ? 2 : props.shardCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogstore;
        this.attrLogstoreName = rosLogstore.attrLogstoreName;
    }
}
