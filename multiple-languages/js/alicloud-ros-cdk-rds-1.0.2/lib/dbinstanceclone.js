"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstanceClone = exports.DBInstanceCloneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rds_generated_1 = require("./rds.generated");
Object.defineProperty(exports, "DBInstanceCloneProperty", { enumerable: true, get: function () { return rds_generated_1.RosDBInstanceClone; } });
/**
 * A ROS resource type:  `ALIYUN::RDS::DBInstanceClone`
 */
class DBInstanceClone extends ros.Resource {
    /**
     * Create a new `ALIYUN::RDS::DBInstanceClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBInstanceClone = new rds_generated_1.RosDBInstanceClone(this, id, {
            periodType: props.periodType === undefined || props.periodType === null ? 'Month' : props.periodType,
            category: props.category,
            privateIpAddress: props.privateIpAddress,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            port: props.port,
            backupId: props.backupId,
            instanceNetworkType: props.instanceNetworkType,
            restoreTime: props.restoreTime,
            dbNames: props.dbNames,
            preferredBackupPeriod: props.preferredBackupPeriod,
            slaveZoneIds: props.slaveZoneIds,
            dbInstanceId: props.dbInstanceId,
            securityIpList: props.securityIpList,
            dbInstanceStorage: props.dbInstanceStorage,
            backupType: props.backupType,
            dbMappings: props.dbMappings,
            connectionStringPrefix: props.connectionStringPrefix,
            maintainTime: props.maintainTime,
            tags: props.tags,
            dbInstanceDescription: props.dbInstanceDescription,
            zoneId: props.zoneId,
            dbInstanceClass: props.dbInstanceClass,
            allocatePublicConnection: props.allocatePublicConnection,
            preferredBackupTime: props.preferredBackupTime,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            dbInstanceStorageType: props.dbInstanceStorageType,
            connectionStringType: props.connectionStringType === undefined || props.connectionStringType === null ? 'Inner' : props.connectionStringType,
            restoreTable: props.restoreTable,
            masterUserPassword: props.masterUserPassword,
            masterUserType: props.masterUserType === undefined || props.masterUserType === null ? 'Normal' : props.masterUserType,
            vpcId: props.vpcId,
            sslSetting: props.sslSetting === undefined || props.sslSetting === null ? 'Disabled' : props.sslSetting,
            masterUsername: props.masterUsername,
            sqlCollectorStatus: props.sqlCollectorStatus,
            backupRetentionPeriod: props.backupRetentionPeriod === undefined || props.backupRetentionPeriod === null ? 7 : props.backupRetentionPeriod,
            tableMeta: props.tableMeta,
            timeoutInMinutes: props.timeoutInMinutes === undefined || props.timeoutInMinutes === null ? 120 : props.timeoutInMinutes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceClone;
        this.attrDbInstanceId = rosDBInstanceClone.attrDbInstanceId;
        this.attrInnerConnectionString = rosDBInstanceClone.attrInnerConnectionString;
        this.attrInnerIpAddress = rosDBInstanceClone.attrInnerIpAddress;
        this.attrInnerPort = rosDBInstanceClone.attrInnerPort;
        this.attrPublicConnectionString = rosDBInstanceClone.attrPublicConnectionString;
        this.attrPublicIpAddress = rosDBInstanceClone.attrPublicIpAddress;
        this.attrPublicPort = rosDBInstanceClone.attrPublicPort;
    }
}
exports.DBInstanceClone = DBInstanceClone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZWNsb25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJpbnN0YW5jZWNsb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQWdRdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEwQzdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUNwRyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxxQkFBcUI7WUFDbEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFD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a0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBQ3RELElBQUksQ0FBQywwQkFBMEIsR0FBRyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQztRQUNoRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7SUFDNUQsQ0FBQztDQUNKO0FBdkdELDBDQXVHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RCSW5zdGFuY2VDbG9uZSB9IGZyb20gJy4vcmRzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RCSW5zdGFuY2VDbG9uZSBhcyBEQkluc3RhbmNlQ2xvbmVQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkRTOjpEQkluc3RhbmNlQ2xvbmVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgREJJbnN0YW5jZUNsb25lUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUlkOiBJbnN0YW5jZSBpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5VHlwZTogVGhlIGNoYXJnZSB0eXBlIG9mIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWxsb2NhdGVQdWJsaWNDb25uZWN0aW9uOiBJZiB0cnVlLCBhbGxvY2F0ZSBwdWJsaWMgY29ubmVjdGlvbiBhdXRvbWF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGxvY2F0ZVB1YmxpY0Nvbm5lY3Rpb24/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwSWQ6IFRoZSBJRCBvZiB0aGUgYmFja3VwIHNldCB0aGF0IHlvdSB3YW50IHRvIHVzZS4gXG4gICAgICogWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZUJhY2t1cHMgb3BlcmF0aW9uIHRvIHF1ZXJ5IHRoZSBtb3N0IHJlY2VudCBiYWNrdXAgc2V0IGxpc3QuIFxuICAgICAqIE5vdGUgWW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgb2YgdGhlIEJhY2t1cElkIGFuZCBSZXN0b3JlVGltZSBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2t1cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwUmV0ZW50aW9uUGVyaW9kOiBUaGUgcmV0ZW50aW9uIHBlcmlvZCBvZiB0aGUgZGF0YSBiYWNrdXAuIFZhbHVlIHJhbmdlOiA3IHRvIDczMC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIG9yaWdpbmFsIHZhbHVlLiBOb3RlIFdoZW4gdGhlIEJhY2t1cFBvbGljeU1vZGUgcGFyYW1ldGVyIGlzIHNldCB0byBMb2dCYWNrdXBQb2xpY3ksIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2t1cFJldGVudGlvblBlcmlvZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhY2t1cFR5cGU6IFRoZSB0eXBlIG9mIGJhY2t1cCB1c2VkIGJ5IHRoZSBuZXcgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczogXG4gICAgICogIC0gRnVsbEJhY2t1cDogZnVsbCBiYWNrdXAgXG4gICAgICogIC0gSW5jcmVtZW50YWxCYWNrdXA6IGluY3JlbWVudGFsIGJhY2t1cFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2t1cFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjYXRlZ29yeTogVGhlIGVkaXRpb24gb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQmFzaWM6IHNwZWNpZmllcyB0byB1c2UgdGhlIEJhc2ljIEVkaXRpb24uXG4gICAgICogSGlnaEF2YWlsYWJpbGl0eTogc3BlY2lmaWVzIHRvIHVzZSB0aGUgSGlnaC1hdmFpbGFiaWxpdHkgRWRpdGlvbi5cbiAgICAgKiBBbHdheXNPbjogc3BlY2lmaWVzIHRvIHVzZSB0aGUgQ2x1c3RlciBFZGl0aW9uLlxuICAgICAqIEZpbmFuY2U6IHNwZWNpZmllcyB0byB1c2UgdGhlIEVudGVycHJpc2UgRWRpdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjYXRlZ29yeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbm5lY3Rpb25TdHJpbmdQcmVmaXg6IFRoZSBwcmVmaXggb2YgdGhlIGVuZHBvaW50LiBcbiAgICAgKiBPbmx5IHRoZSBwcmVmaXggb2YgdGhlIEN1cnJlbnRDb25uZWN0aW9uU3RyaW5nIHBhcmFtZXRlciB2YWx1ZSBjYW4gYmUgbW9kaWZpZWQuXG4gICAgICogVGhlIHByZWZpeCBtdXN0IGJlIDggdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgYW5kIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbm5lY3Rpb25TdHJpbmdQcmVmaXg/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb25uZWN0aW9uU3RyaW5nVHlwZTogVGhlIGVuZHBvaW50IHR5cGUgb2YgdGhlIGluc3RhbmNlLCBhbGxvdyB2YWx1ZXM6IElubmVyLCBQdWJsaWNcbiAgICAgKi9cbiAgICByZWFkb25seSBjb25uZWN0aW9uU3RyaW5nVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VDbGFzczogRGF0YWJhc2UgaW5zdGFuY2UgdHlwZS4gUmVmZXIgdGhlIFJEUyBkYXRhYmFzZSBpbnN0YW5jZSB0eXBlIHJlZmVyZW5jZSwgc3VjaCBhcyAncmRzLm15czIubGFyZ2UnLCAncmRzLm1zczEubGFyZ2UnLCAncmRzLnBnLnMxLnNtYWxsJyBldGNcbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlQ2xhc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkluc3RhbmNlRGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIGNyZWF0ZWQgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJJbnN0YW5jZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZVN0b3JhZ2U6IERhdGFiYXNlIGluc3RhbmNlIHN0b3JhZ2Ugc2l6ZS4gbXlzcWwgaXMgWzUsMTAwMF0uIHNxbCBzZXJ2ZXIgMjAwOHIyIGlzIFsxMCwxMDAwXSwgc3FsIHNlcnZlciAyMDEyLzIwMTJfd2ViLzIwMTYtd2ViIGlzIFsyMCwxMDAwXS4gUG9zdGdyZVNRTCBhbmQgUFBBUyBpcyBbNSwyMDAwXS4gSW5jcmVhc2VkIGV2ZXJ5IDUgR0IsIFVuaXQgaW4gR0JcbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlU3RvcmFnZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VTdG9yYWdlVHlwZTogVGhlIHN0b3JhZ2UgdHlwZSBvZiB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBsb2NhbF9zc2Q6IHNwZWNpZmllcyB0byB1c2UgbG9jYWwgU1NEcy4gVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgc3RvcmFnZSB0eXBlLlxuICAgICAqIGNsb3VkX3NzZDogc3BlY2lmaWVzIHRvIHVzZSBzdGFuZGFyZCBTU0RzLlxuICAgICAqIGNsb3VkX2Vzc2Q6IGVuaGFuY2VkIFNTRCBvZiBwZXJmb3JtYW5jZSBsZXZlbCAoUEwpMS5cbiAgICAgKiBjbG91ZF9lc3NkMjogZW5oYW5jZWQgU1NEIG9mIFBMMi5cbiAgICAgKiBjbG91ZF9lc3NkMzogZW5oYW5jZWQgU1NEIG9mIFBMMy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlU3RvcmFnZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYk1hcHBpbmdzOiBEYXRhYmFzZSBtYXBwaW5ncyB0byBhdHRhY2ggdG8gZGIgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJNYXBwaW5ncz86IEFycmF5PFJvc0RCSW5zdGFuY2VDbG9uZS5EQk1hcHBpbmdzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJOYW1lczogVGhlIG5hbWVzIG9mIHRoZSBkYXRhYmFzZXMgdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUgb24gdGhlIG5ldyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYk5hbWVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVkaWNhdGVkSG9zdEdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgaG9zdCBncm91cCB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncyBpZiB5b3UgY3JlYXRlIGFuIGluc3RhbmNlIGluIGEgaG9zdCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWRpY2F0ZWRIb3N0R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmV0d29ya1R5cGU6IFRoZSBuZXR3b3JrIHR5cGUgb2YgdGhlIG5ldyBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiAtIFZQQyBcbiAgICAgKiAtIENsYXNzaWMgXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIG5ldHdvcmsgdHlwZSBvZiB0aGUgb3JpZ2luYWwgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOZXR3b3JrVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1haW50YWluVGltZTogVGhlIHBlcmlvZCBkdXJpbmcgd2hpY2ggdGhlIG1haW50ZW5hbmNlIHBlcmZvcm1zLiBUaGUgZm9ybWF0IGlzIEhIOm1tWi1ISDptbVouXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFpbnRhaW5UaW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWFzdGVyVXNlcm5hbWU6IFRoZSBtYXN0ZXIgdXNlciBuYW1lIGZvciB0aGUgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFzdGVyVXNlcm5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJVc2VyUGFzc3dvcmQ6IFRoZSBtYXN0ZXIgcGFzc3dvcmQgZm9yIHRoZSBkYXRhYmFzZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJVc2VyUGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJVc2VyVHlwZTogUHJpdmlsZWdlIHR5cGUgb2YgYWNjb3VudC5cbiAgICAgKiAgTm9ybWFsOiBDb21tb24gcHJpdmlsZWdlLiBcbiAgICAgKiAgU3VwZXI6IEhpZ2ggcHJpdmlsZWdlLiBcbiAgICAgKiBTeXNhZG1pbjogU3VwZXIgcHJpdmlsZWdlcyAoU0EpIChvbmx5IHN1cHBvcnRlZCBieSBTUUwgU2VydmVyKVxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIE5vcm1hbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJVc2VyVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBlcmlvZDogUHJlcGFpZCB0aW1lIHBlcmlvZC4gV2hpbGUgY2hvb3NlIGJ5IHBheSBieSBtb250aCwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDkuIFdoaWxlIGNob29zZSBwYXkgYnkgeWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kVHlwZTogQ2hhcmdlIHBlcmlvZCBmb3IgY3JlYXRlZCBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvcnQ6IFRoZSBwb3J0IG9mIHRoZSBkYXRhYmFzZSBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVmZXJyZWRCYWNrdXBQZXJpb2Q6IFRoZSBiYWNrdXAgcGVyaW9kLiBTZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMgd2l0aCBjb21tYXMgKCwpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgb3JpZ2luYWwgdmFsdWUuIFZhbGlkIHZhbHVlczpNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5IFN1bmRheSBOb3RlIFdoZW4gdGhlIEJhY2t1cFBvbGljeU1vZGUgcGFyYW1ldGVyIGlzIHNldCB0byBEYXRhQmFja3VwUG9saWN5LCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVmZXJyZWRCYWNrdXBQZXJpb2Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJlZmVycmVkQmFja3VwVGltZTogVGhlIHRpbWUgd2hlbiB0aGUgYmFja3VwIHRhc2sgaXMgcGVyZm9ybWVkLiBGb3JtYXQ6IHl5eXktTU0tZGRaLUhIOm1tOnNzWi5Ob3RlIFdoZW4gdGhlIEJhY2t1cFBvbGljeU1vZGUgcGFyYW1ldGVyIGlzIHNldCB0byBEYXRhQmFja3VwUG9saWN5LCB0aGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVmZXJyZWRCYWNrdXBUaW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpdmF0ZUlwQWRkcmVzczogVGhlIHByaXZhdGUgaXAgZm9yIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpdmF0ZUlwQWRkcmVzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc3RvcmVUYWJsZTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVzdG9yZSBzcGVjaWZpYyBkYXRhYmFzZXMgYW5kIHRhYmxlcy4gXG4gICAgICogVGhlIHZhbHVlIDEgc3BlY2lmaWVzIHRvIHJlc3RvcmUgc3BlY2lmaWMgZGF0YWJhc2VzIGFuZCB0YWJsZXMuIFxuICAgICAqIElmIHlvdSBkbyBub3Qgd2FudCB0byByZXN0b3JlIHNwZWNpZmljIGRhdGFiYXNlcyBvciB0YWJsZXMsIHlvdSBjYW4gY2hvb3NlIG5vdCB0byBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc3RvcmVUYWJsZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc3RvcmVUaW1lOiBUaGUgcG9pbnQgaW4gdGltZSB0byB3aGljaCB5b3Ugd2FudCB0byByZXN0b3JlIHRoZSBkYXRhIG9mIHRoZSBvcmlnaW5hbCBpbnN0YW5jZS4gXG4gICAgICogVGhlIHBvaW50IGluIHRpbWUgbXVzdCBmYWxsIHdpdGhpbiB0aGUgc3BlY2lmaWVkIGxvZyBiYWNrdXAgcmV0ZW50aW9uIHBlcmlvZC4gXG4gICAgICogVGhlIHRpbWUgZm9sbG93cyB0aGUgSVNPIDg2MDEgc3RhbmRhcmQgaW4gdGhlIHl5eXktTU0tZGRUSEg6bW06c3NaIGZvcm1hdC4gXG4gICAgICogVGhlIHRpbWUgbXVzdCBiZSBpbiBVVEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzdG9yZVRpbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgRUNTIHNlY3VyaXR5IGdyb3Vwcy4gXG4gICAgICogRWFjaCBSRFMgaW5zdGFuY2UgY2FuIGJlIGFzc29jaWF0ZWQgd2l0aCB1cCB0byB0aHJlZSBFQ1Mgc2VjdXJpdHkgZ3JvdXBzLiBcbiAgICAgKiBZb3UgbXVzdCBzZXBhcmF0ZSB0aGVtIHdpdGggY29tbWFzICgsKS4gXG4gICAgICogVG8gZGVsZXRlIGFuIEVDUyBTZWN1cml0eSBncm91cCwgbGVhdmUgdGhpcyBwYXJhbWV0ZXIgZW1wdHkuIFxuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlJcExpc3Q6IFNlY3VyaXR5IGlwIHRvIGFjY2VzcyB0aGUgZGF0YWJhc2UgaW5zdGFuY2UsIGNvbWJpbmUgd2l0aCBjb21tYSwgMC4wLjAuMC8wIG1lYW5zIG5vIGxpbWl0YXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlJcExpc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzbGF2ZVpvbmVJZHM6IExpc3Qgb2Ygc2xhdmUgem9uZSBpZHMgY2FuIHNwZWNpZnkgc2xhdmUgem9uZSBpZHMgd2hlbiBjcmVhdGluZyB0aGUgaGlnaC1hdmFpbGFiaWxpdHkgb3IgZW50ZXJwcmlzZSBlZGl0aW9uIGluc3RhbmNlLiBNZWFud2hpbGUsIFZTd2l0Y2hJZCBuZWVkcyB0byBwYXNzIGluIHRoZSBjb3JyZXNwb25kaW5nIHZzd2l0Y2ggaWQgdG8gdGhlIHNsYXZlIHpvbmUgYnkgb3JkZXIuIEZvciBleGFtcGxlLCBab25lSWQgPSBcInpvbmUtYVwiIGFuZCBTbGF2ZVpvbmVJZHMgPSBbXCJ6b25lLWNcIiwgXCJ6b25lLWJcIl0sIHRoZW4gdGhlIFZTd2l0Y2hJZCBtdXN0IGJlIFwidnN3LXpvbmUtYSx2c3ctem9uZS1jLHZzdy16b25lLWJcIi4gT2YgY291cnNlLCB5b3UgY2FuIGFsc28gY2hvb3NlIGF1dG9tYXRpYyBhbGxvY2F0aW9uLCBmb3IgZXhhbXBsZSwgWm9uZUlkID0gXCJ6b25lLWFcIiBhbmQgU2xhdmVab25lSWRzID0gW1wiQXV0b1wiLCBcIkF1dG9cIl0sIHRoZW4gdGhlIFZTd2l0Y2hJZCBtdXN0IGJlIFwidnN3LXpvbmUtYSxBdXRvLEF1dG9cIi4gVGhlIGxpc3QgY29udGFpbnMgdXAgdG8gMiBzbGF2ZSB6b25lIGlkcywgc2VwYXJhdGVkIGJ5IGNvbW1hcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbGF2ZVpvbmVJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3FsQ29sbGVjdG9yU3RhdHVzOiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgU1FMIEV4cGxvcmVyIChTUUwgYXVkaXQpIGZlYXR1cmUuIFxuICAgICAqIFZhbGlkIHZhbHVlczpFbmFibGUgfCBEaXNhYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcWxDb2xsZWN0b3JTdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzc2xTZXR0aW5nOiBTZWN1cmUgU29ja2V0cyBMYXllciAoU1NMKSBsaW5rIHNldHRpbmcgb2YgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRGlzYWJsZWQ6IERpc2FibGUgU1NMXG4gICAgICogRW5hYmxlZEZvclB1YmxpY0Nvbm5lY3Rpb246IFB1YmxpYyBjb25uZWN0aW9uIGFkZHJlc3Mgd2lsbCBiZSBwcm90ZWN0ZWQgYnkgdGhlIFNTTCBjZXJ0aWZpY2F0ZS4gSXQgcmVxdWlyZXMgQWxsb2NhdGVQdWJsaWNDb25uZWN0aW9uIGlzIHRydWUuXG4gICAgICogRW5hYmxlZEZvcklubmVyQ29ubmVjdGlvbjogUHJpdmF0ZSBjb25uZWN0aW9uIGFkZHJlc3Mgd2lsbCBiZSBwcm90ZWN0ZWQgYnkgdGhlIFNTTCBjZXJ0aWZpY2F0ZS5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIERpc2FibGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNzbFNldHRpbmc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWJsZU1ldGE6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGF0YWJhc2VzIGFuZCB0YWJsZXMgdGhhdCB5b3Ugd2FudCB0byByZXN0b3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhYmxlTWV0YT86IEFycmF5PFJvc0RCSW5zdGFuY2VDbG9uZS5UYWJsZU1ldGFQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUaGUgdGFncyBvZiBhbiBpbnN0YW5jZS5cbiAgICAgKiBZb3Ugc2hvdWxkIGlucHV0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgdGFnIHdpdGggdGhlIGZvcm1hdCBvZiB0aGUgS2V5LVZhbHVlLCBzdWNoIGFzIHtcImtleTFcIjpcInZhbHVlMVwiLFwia2V5MlwiOlwidmFsdWUyXCIsIC4uLiBcImtleTVcIjpcInZhbHVlNVwifS5cbiAgICAgKiBBdCBtb3N0IDUgdGFncyBjYW4gYmUgc3BlY2lmaWVkLlxuICAgICAqIEtleVxuICAgICAqIEl0IGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBDYW5ub3QgYmVnaW4gd2l0aCBhbGl5dW4uXG4gICAgICogQ2Fubm90IGJlZ2luIHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKiBDYW5ub3QgYmUgYSBudWxsIHN0cmluZy5cbiAgICAgKiBWYWx1ZVxuICAgICAqIEl0IGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICogQ2Fubm90IGJlZ2luIHdpdGggYWxpeXVuLlxuICAgICAqIENhbm5vdCBiZWdpbiB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICogQ2FuIGJlIGEgbnVsbCBzdHJpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogKGFueSkgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWVvdXRJbk1pbnV0ZXM6IFRoZSB0aW1lb3V0IHBlcmlvZCBmb3IgY3JlYXRpbmcgdGhlIGNsb25lIGluc3RhbmNlIHJlc291cmNlLiBVbml0OiBNaW51dGUuIERlZmF1bHQ6IDEyMC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lb3V0SW5NaW51dGVzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IFRoZSBWUEMgaWQgb2YgY3JlYXRlZCBkYXRhYmFzZSBpbnN0YW5jZS4gRm9yIFZQQyBuZXR3b3JrLCB0aGUgcHJvcGVydHkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2U3dpdGNoIGlkIG9mIGNyZWF0ZWQgaW5zdGFuY2UuIEZvciBWUEMgbmV0d29yaywgdGhlIHByb3BlcnR5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmVJZDogc2VsZWN0ZWQgem9uZSB0byBjcmVhdGUgZGF0YWJhc2UgaW5zdGFuY2UuIFlvdSBjYW5ub3Qgc2V0IHRoZSBab25lSWQgcGFyYW1ldGVyIGlmIHRoZSBNdWx0aUFaIHBhcmFtZXRlciBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJEUzo6REJJbnN0YW5jZUNsb25lYFxuICovXG5leHBvcnQgY2xhc3MgREJJbnN0YW5jZUNsb25lIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkluc3RhbmNlSWQ6IFRoZSBpbnN0YW5jZSBpZCBvZiBjcmVhdGVkIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5uZXJDb25uZWN0aW9uU3RyaW5nOiBEQiBpbnN0YW5jZSBjb25uZWN0aW9uIHVybCBieSBJbnRyYW5ldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklubmVyQ29ubmVjdGlvblN0cmluZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElubmVySVBBZGRyZXNzOiBJUCBBZGRyZXNzIGZvciBjcmVhdGVkIERCIGluc3RhbmNlIG9mIEludHJhbmV0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5uZXJJcEFkZHJlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbm5lclBvcnQ6IEludHJhbmV0IHBvcnQgb2YgY3JlYXRlZCBEQiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklubmVyUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFB1YmxpY0Nvbm5lY3Rpb25TdHJpbmc6IERCIGluc3RhbmNlIGNvbm5lY3Rpb24gdXJsIGJ5IEludGVybmV0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljQ29ubmVjdGlvblN0cmluZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFB1YmxpY0lQQWRkcmVzczogSVAgQWRkcmVzcyBmb3IgY3JlYXRlZCBEQiBpbnN0YW5jZSBvZiBJbnRlcm5ldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY0lwQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFB1YmxpY1BvcnQ6IEludGVybmV0IHBvcnQgb2YgY3JlYXRlZCBEQiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clB1YmxpY1BvcnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpSRFM6OkRCSW5zdGFuY2VDbG9uZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogREJJbnN0YW5jZUNsb25lUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zREJJbnN0YW5jZUNsb25lID0gbmV3IFJvc0RCSW5zdGFuY2VDbG9uZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBlcmlvZFR5cGU6IHByb3BzLnBlcmlvZFR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wZXJpb2RUeXBlID09PSBudWxsID8gJ01vbnRoJyA6IHByb3BzLnBlcmlvZFR5cGUsXG4gICAgICAgICAgICBjYXRlZ29yeTogcHJvcHMuY2F0ZWdvcnksXG4gICAgICAgICAgICBwcml2YXRlSXBBZGRyZXNzOiBwcm9wcy5wcml2YXRlSXBBZGRyZXNzLFxuICAgICAgICAgICAgZGVkaWNhdGVkSG9zdEdyb3VwSWQ6IHByb3BzLmRlZGljYXRlZEhvc3RHcm91cElkLFxuICAgICAgICAgICAgcG9ydDogcHJvcHMucG9ydCxcbiAgICAgICAgICAgIGJhY2t1cElkOiBwcm9wcy5iYWNrdXBJZCxcbiAgICAgICAgICAgIGluc3RhbmNlTmV0d29ya1R5cGU6IHByb3BzLmluc3RhbmNlTmV0d29ya1R5cGUsXG4gICAgICAgICAgICByZXN0b3JlVGltZTogcHJvcHMucmVzdG9yZVRpbWUsXG4gICAgICAgICAgICBkYk5hbWVzOiBwcm9wcy5kYk5hbWVzLFxuICAgICAgICAgICAgcHJlZmVycmVkQmFja3VwUGVyaW9kOiBwcm9wcy5wcmVmZXJyZWRCYWNrdXBQZXJpb2QsXG4gICAgICAgICAgICBzbGF2ZVpvbmVJZHM6IHByb3BzLnNsYXZlWm9uZUlkcyxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VJZDogcHJvcHMuZGJJbnN0YW5jZUlkLFxuICAgICAgICAgICAgc2VjdXJpdHlJcExpc3Q6IHByb3BzLnNlY3VyaXR5SXBMaXN0LFxuICAgICAgICAgICAgZGJJbnN0YW5jZVN0b3JhZ2U6IHByb3BzLmRiSW5zdGFuY2VTdG9yYWdlLFxuICAgICAgICAgICAgYmFja3VwVHlwZTogcHJvcHMuYmFja3VwVHlwZSxcbiAgICAgICAgICAgIGRiTWFwcGluZ3M6IHByb3BzLmRiTWFwcGluZ3MsXG4gICAgICAgICAgICBjb25uZWN0aW9uU3RyaW5nUHJlZml4OiBwcm9wcy5jb25uZWN0aW9uU3RyaW5nUHJlZml4LFxuICAgICAgICAgICAgbWFpbnRhaW5UaW1lOiBwcm9wcy5tYWludGFpblRpbWUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgZGJJbnN0YW5jZURlc2NyaXB0aW9uOiBwcm9wcy5kYkluc3RhbmNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB6b25lSWQ6IHByb3BzLnpvbmVJZCxcbiAgICAgICAgICAgIGRiSW5zdGFuY2VDbGFzczogcHJvcHMuZGJJbnN0YW5jZUNsYXNzLFxuICAgICAgICAgICAgYWxsb2NhdGVQdWJsaWNDb25uZWN0aW9uOiBwcm9wcy5hbGxvY2F0ZVB1YmxpY0Nvbm5lY3Rpb24sXG4gICAgICAgICAgICBwcmVmZXJyZWRCYWNrdXBUaW1lOiBwcm9wcy5wcmVmZXJyZWRCYWNrdXBUaW1lLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kID09PSBudWxsID8gMSA6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHBheVR5cGU6IHByb3BzLnBheVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wYXlUeXBlID09PSBudWxsID8gJ1Bvc3RwYWlkJyA6IHByb3BzLnBheVR5cGUsXG4gICAgICAgICAgICBkYkluc3RhbmNlU3RvcmFnZVR5cGU6IHByb3BzLmRiSW5zdGFuY2VTdG9yYWdlVHlwZSxcbiAgICAgICAgICAgIGNvbm5lY3Rpb25TdHJpbmdUeXBlOiBwcm9wcy5jb25uZWN0aW9uU3RyaW5nVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNvbm5lY3Rpb25TdHJpbmdUeXBlID09PSBudWxsID8gJ0lubmVyJyA6IHByb3BzLmNvbm5lY3Rpb25TdHJpbmdUeXBlLFxuICAgICAgICAgICAgcmVzdG9yZVRhYmxlOiBwcm9wcy5yZXN0b3JlVGFibGUsXG4gICAgICAgICAgICBtYXN0ZXJVc2VyUGFzc3dvcmQ6IHByb3BzLm1hc3RlclVzZXJQYXNzd29yZCxcbiAgICAgICAgICAgIG1hc3RlclVzZXJUeXBlOiBwcm9wcy5tYXN0ZXJVc2VyVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm1hc3RlclVzZXJUeXBlID09PSBudWxsID8gJ05vcm1hbCcgOiBwcm9wcy5tYXN0ZXJVc2VyVHlwZSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIHNzbFNldHRpbmc6IHByb3BzLnNzbFNldHRpbmcgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zc2xTZXR0aW5nID09PSBudWxsID8gJ0Rpc2FibGVkJyA6IHByb3BzLnNzbFNldHRpbmcsXG4gICAgICAgICAgICBtYXN0ZXJVc2VybmFtZTogcHJvcHMubWFzdGVyVXNlcm5hbWUsXG4gICAgICAgICAgICBzcWxDb2xsZWN0b3JTdGF0dXM6IHByb3BzLnNxbENvbGxlY3RvclN0YXR1cyxcbiAgICAgICAgICAgIGJhY2t1cFJldGVudGlvblBlcmlvZDogcHJvcHMuYmFja3VwUmV0ZW50aW9uUGVyaW9kID09PSB1bmRlZmluZWQgfHwgcHJvcHMuYmFja3VwUmV0ZW50aW9uUGVyaW9kID09PSBudWxsID8gNyA6IHByb3BzLmJhY2t1cFJldGVudGlvblBlcmlvZCxcbiAgICAgICAgICAgIHRhYmxlTWV0YTogcHJvcHMudGFibGVNZXRhLFxuICAgICAgICAgICAgdGltZW91dEluTWludXRlczogcHJvcHMudGltZW91dEluTWludXRlcyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnRpbWVvdXRJbk1pbnV0ZXMgPT09IG51bGwgPyAxMjAgOiBwcm9wcy50aW1lb3V0SW5NaW51dGVzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RCSW5zdGFuY2VDbG9uZTtcbiAgICAgICAgdGhpcy5hdHRyRGJJbnN0YW5jZUlkID0gcm9zREJJbnN0YW5jZUNsb25lLmF0dHJEYkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0cklubmVyQ29ubmVjdGlvblN0cmluZyA9IHJvc0RCSW5zdGFuY2VDbG9uZS5hdHRySW5uZXJDb25uZWN0aW9uU3RyaW5nO1xuICAgICAgICB0aGlzLmF0dHJJbm5lcklwQWRkcmVzcyA9IHJvc0RCSW5zdGFuY2VDbG9uZS5hdHRySW5uZXJJcEFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0cklubmVyUG9ydCA9IHJvc0RCSW5zdGFuY2VDbG9uZS5hdHRySW5uZXJQb3J0O1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNDb25uZWN0aW9uU3RyaW5nID0gcm9zREJJbnN0YW5jZUNsb25lLmF0dHJQdWJsaWNDb25uZWN0aW9uU3RyaW5nO1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNJcEFkZHJlc3MgPSByb3NEQkluc3RhbmNlQ2xvbmUuYXR0clB1YmxpY0lwQWRkcmVzcztcbiAgICAgICAgdGhpcy5hdHRyUHVibGljUG9ydCA9IHJvc0RCSW5zdGFuY2VDbG9uZS5hdHRyUHVibGljUG9ydDtcbiAgICB9XG59XG4iXX0=