import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './polardbx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `ALIYUN::PolarDBX::Account`
 */
export interface AccountProps {

    /**
     * Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPassword: The password of the account.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property accountDescription: Account description information.
     */
    readonly accountDescription?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PolarDBX::Account`
 */
export class Account extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccountDescription: Account description information.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * Attribute AccountName: Account name.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * Attribute AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PolarDBX::Account`.
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
        this.attrDbInstanceId = rosAccount.attrDbInstanceId;
    }
}
