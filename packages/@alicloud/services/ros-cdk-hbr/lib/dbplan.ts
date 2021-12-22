import * as ros from '@alicloud/ros-cdk-core';
import { RosDbPlan } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDbPlan as DbPlanProperty };

/**
 * Properties for defining a `ALIYUN::HBR::DbPlan`
 */
export interface DbPlanProps {

    /**
     * Property dbPlanName: Display name of the backup plan.
     */
    readonly dbPlanName: string | ros.IResolvable;

    /**
     * Property hostUuid: Uuid of the host of the database instance.
     */
    readonly hostUuid: string | ros.IResolvable;

    /**
     * Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * Property continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    readonly continuousPlan?: string | ros.IResolvable;

    /**
     * Property cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    readonly cumulativePlan?: string | ros.IResolvable;

    /**
     * Property fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    readonly fullPlan?: string | ros.IResolvable;

    /**
     * Property incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    readonly incPlan?: string | ros.IResolvable;

    /**
     * Property instanceUuid: Uuid of database instance.
     */
    readonly instanceUuid?: string | ros.IResolvable;

    /**
     * Property logPlan: Log backup plan schedule.More details see FullPlan.
     */
    readonly logPlan?: string | ros.IResolvable;

    /**
     * Property maxRateLimit: Max rate limit for backup job,
     */
    readonly maxRateLimit?: number | ros.IResolvable;

    /**
     * Property maxRetrySeconds: Max retry seconds on network failure.
     */
    readonly maxRetrySeconds?: number | ros.IResolvable;

    /**
     * Property options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    readonly options?: string | ros.IResolvable;

    /**
     * Property source: Which database instance or database will be backup.
     */
    readonly source?: RosDbPlan.SourceProperty | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::HBR::DbPlan`
 */
export class DbPlan extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ContinuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    public readonly attrContinuousPlan: ros.IResolvable;

    /**
     * Attribute ContinuousUuid: Uuid of continuous backup plan.
     */
    public readonly attrContinuousUuid: ros.IResolvable;

    /**
     * Attribute CumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    public readonly attrCumulativePlan: ros.IResolvable;

    /**
     * Attribute CumulativeUuid: Uuid of cumulative plan.
     */
    public readonly attrCumulativeUuid: ros.IResolvable;

    /**
     * Attribute DbPlanName: Display name of the backup plan.
     */
    public readonly attrDbPlanName: ros.IResolvable;

    /**
     * Attribute FullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    public readonly attrFullPlan: ros.IResolvable;

    /**
     * Attribute FullUuid: Uuid of full backup plan.
     */
    public readonly attrFullUuid: ros.IResolvable;

    /**
     * Attribute HostUuid: Uuid of the host of the database instance.
     */
    public readonly attrHostUuid: ros.IResolvable;

    /**
     * Attribute IncPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    public readonly attrIncPlan: ros.IResolvable;

    /**
     * Attribute IncUuid: Uuid of the incremental bakcup plan.
     */
    public readonly attrIncUuid: ros.IResolvable;

    /**
     * Attribute InstanceUuid: Uuid of database instance.
     */
    public readonly attrInstanceUuid: ros.IResolvable;

    /**
     * Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
     */
    public readonly attrLogPlan: ros.IResolvable;

    /**
     * Attribute LogUuid: Uuid of the log backup plan.
     */
    public readonly attrLogUuid: ros.IResolvable;

    /**
     * Attribute MaxRateLimit: Max rate limit for backup job,
     */
    public readonly attrMaxRateLimit: ros.IResolvable;

    /**
     * Attribute MaxRetrySeconds: Max retry seconds on network failure.
     */
    public readonly attrMaxRetrySeconds: ros.IResolvable;

    /**
     * Attribute Options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    public readonly attrOptions: ros.IResolvable;

    /**
     * Attribute PlanId: Id of the backup plan.
     */
    public readonly attrPlanId: ros.IResolvable;

    /**
     * Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * Attribute Target: Target vault to backup.
     */
    public readonly attrTarget: ros.IResolvable;

    /**
     * Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    public readonly attrVaultId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbPlanProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDbPlan = new RosDbPlan(this, id,  {
            options: props.options,
            instanceUuid: props.instanceUuid,
            sourceType: props.sourceType,
            vaultId: props.vaultId,
            source: props.source,
            continuousPlan: props.continuousPlan,
            incPlan: props.incPlan,
            maxRetrySeconds: props.maxRetrySeconds,
            hostUuid: props.hostUuid,
            cumulativePlan: props.cumulativePlan,
            fullPlan: props.fullPlan,
            logPlan: props.logPlan,
            maxRateLimit: props.maxRateLimit,
            dbPlanName: props.dbPlanName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbPlan;
        this.attrContinuousPlan = rosDbPlan.attrContinuousPlan;
        this.attrContinuousUuid = rosDbPlan.attrContinuousUuid;
        this.attrCumulativePlan = rosDbPlan.attrCumulativePlan;
        this.attrCumulativeUuid = rosDbPlan.attrCumulativeUuid;
        this.attrDbPlanName = rosDbPlan.attrDbPlanName;
        this.attrFullPlan = rosDbPlan.attrFullPlan;
        this.attrFullUuid = rosDbPlan.attrFullUuid;
        this.attrHostUuid = rosDbPlan.attrHostUuid;
        this.attrIncPlan = rosDbPlan.attrIncPlan;
        this.attrIncUuid = rosDbPlan.attrIncUuid;
        this.attrInstanceUuid = rosDbPlan.attrInstanceUuid;
        this.attrLogPlan = rosDbPlan.attrLogPlan;
        this.attrLogUuid = rosDbPlan.attrLogUuid;
        this.attrMaxRateLimit = rosDbPlan.attrMaxRateLimit;
        this.attrMaxRetrySeconds = rosDbPlan.attrMaxRetrySeconds;
        this.attrOptions = rosDbPlan.attrOptions;
        this.attrPlanId = rosDbPlan.attrPlanId;
        this.attrSourceType = rosDbPlan.attrSourceType;
        this.attrTarget = rosDbPlan.attrTarget;
        this.attrVaultId = rosDbPlan.attrVaultId;
    }
}
