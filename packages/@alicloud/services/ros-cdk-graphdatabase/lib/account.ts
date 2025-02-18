import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `ALIYUN::GraphDatabase::Account`
 */
export interface AccountProps {

    /**
     * Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPassword: Account password.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property accountDescription: Account description.
     */
    readonly accountDescription?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GraphDatabase::Account`
 */
export class Account extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccountDescription: Account description.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * Attribute AccountName: Account name.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * Attribute AccountType: Account Type.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GraphDatabase::Account`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccount = new RosAccount(this, id,  {
            accountDescription: props.accountDescription,
            dbInstanceId: props.dbInstanceId,
            accountPassword: props.accountPassword,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountDescription = rosAccount.attrAccountDescription;
        this.attrAccountName = rosAccount.attrAccountName;
        this.attrAccountType = rosAccount.attrAccountType;
    }
}
