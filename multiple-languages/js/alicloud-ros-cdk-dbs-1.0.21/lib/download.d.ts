import * as ros from '@alicloud/ros-cdk-core';
import { RosDownload } from './dbs.generated';
export { RosDownload as DownloadProperty };
/**
 * Properties for defining a `ALIYUN::DBS::Download`
 */
export interface DownloadProps {
    /**
     * Property formatType: The format to which the downloaded backup set is converted.
     * Valid values: CSV|SQL|Parquet
     */
    readonly formatType: string | ros.IResolvable;
    /**
     * Property instanceName: The ID of the instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property bakSetId: The ID of the backup set. You can call the DescribeBackups operation to query the ID of the backup set.
     * This parameter is required if the BakSetType parameter is set to full.
     */
    readonly bakSetId?: string | ros.IResolvable;
    /**
     * Property bakSetSize: The size of the full backup set. Unit: bytes.
     * You can call the DescribeBackups operation to query the size of the full backup set.
     */
    readonly bakSetSize?: string | ros.IResolvable;
    /**
     * Property bakSetType: The type of the download task. Valid values:
     * full: downloads a full backup set
     * pitr: downloads a backup set at a specific point in time.
     */
    readonly bakSetType?: string | ros.IResolvable;
    /**
     * Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
     * Valid values: true|false, default is true.
     */
    readonly deleteBackupSetInOss?: boolean | ros.IResolvable;
    /**
     * Property downloadAddressDuration: When the download target is a URL, set the link validity period.
     * The default URL validity period is 7200 seconds.
     * The effective duration range can be set from 300 seconds to 86400 seconds
     */
    readonly downloadAddressDuration?: number | ros.IResolvable;
    /**
     * Property downloadPointInTime: The point in time at which the backup set is downloaded.
     * Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     * This parameter is required if the BakSetType parameter is set to pitr.
     */
    readonly downloadPointInTime?: string | ros.IResolvable;
    /**
     * Property targetBucket: The name of the OSS bucket that is used to store the backup set.
     * This parameter is required if the TargetType parameter is set to OSS.
     * Make sure that your account is granted the AliyunDBSDefaultRole permission.
     * For more information, see Use RAM for resource authorization.
     * You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
     */
    readonly targetBucket?: string | ros.IResolvable;
    /**
     * Property targetOssRegion: The region in which the OSS bucket resides.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    readonly targetOssRegion?: string | ros.IResolvable;
    /**
     * Property targetPath: The destination path to which the backup set is downloaded.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    readonly targetPath?: string | ros.IResolvable;
    /**
     * Property targetType: The type of the destination to which the backup set is downloaded.
     * Valid values: OSS|URL
     */
    readonly targetType?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DBS::Download`
 */
export declare class Download extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BakSetId: The ID of the backup set.
     */
    readonly attrBakSetId: ros.IResolvable;
    /**
     * Attribute DownloadAddressInfo: The download address information.
     */
    readonly attrDownloadAddressInfo: ros.IResolvable;
    /**
     * Attribute InstanceName: The ID of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute TaskId: The ID of the download task.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DBS::Download`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DownloadProps, enableResourcePropertyConstraint?: boolean);
}
