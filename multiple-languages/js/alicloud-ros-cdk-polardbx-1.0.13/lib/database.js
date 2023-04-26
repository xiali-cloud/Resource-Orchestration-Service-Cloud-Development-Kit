"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.DatabaseProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardbx_generated_1 = require("./polardbx.generated");
Object.defineProperty(exports, "DatabaseProperty", { enumerable: true, get: function () { return polardbx_generated_1.RosDatabase; } });
/**
 * A ROS resource type:  `ALIYUN::PolarDBX::Database`
 */
class Database extends ros.Resource {
    /**
     * Create a new `ALIYUN::PolarDBX::Database`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDatabase = new polardbx_generated_1.RosDatabase(this, id, {
            characterSetName: props.characterSetName,
            dbInstanceId: props.dbInstanceId,
            mode: props.mode,
            databaseName: props.databaseName,
            databaseDescription: props.databaseDescription,
            accounts: props.accounts,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDatabase;
        this.attrAccounts = rosDatabase.attrAccounts;
        this.attrCharacterSetName = rosDatabase.attrCharacterSetName;
        this.attrDbInstanceId = rosDatabase.attrDbInstanceId;
        this.attrDatabaseDescription = rosDatabase.attrDatabaseDescription;
        this.attrDatabaseName = rosDatabase.attrDatabaseName;
    }
}
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsNkRBQW1EO0FBRTNCLGlHQUZmLGdDQUFXLE9BRW9CO0FBNEN4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLGdDQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQXpERCw0QkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEYXRhYmFzZSB9IGZyb20gJy4vcG9sYXJkYnguZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRGF0YWJhc2UgYXMgRGF0YWJhc2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UG9sYXJEQlg6OkRhdGFiYXNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjb3VudHM6IExpc3Qgb2YgYWNjb3VudHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudHM6IEFycmF5PFJvc0RhdGFiYXNlLkFjY291bnRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2hhcmFjdGVyU2V0TmFtZTogQ2hhcmFjdGVyIHNldCwgd2hpY2ggc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXIgc2V0czpcbiAgICAgKiAtICoqdXRmOCAqICpcbiAgICAgKiAtICoqZ2JrKipcbiAgICAgKiAtICoqbGF0aW4xICogKlxuICAgICAqIC0gKip1dGY4bWI0ICogKi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGFyYWN0ZXJTZXROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYXRhYmFzZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhYmFzZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFiYXNlRGVzY3JpcHRpb246IERhdGFiYXNlIGRlc2NyaXB0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFiYXNlRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtb2RlOiBUaGUgbW9kZSBzZWxlY3RlZCB3aGVuIGNyZWF0aW5nIHRoZSBkYXRhYmFzZS4gVGhlIHZhbHVlcyBhcmUgYXMgZm9sbG93czpcbiAgICAgKiAtICoqYXV0byoqOiBUaGUgZGF0YWJhc2UgaW4gdGhpcyBtb2RlIHN1cHBvcnRzIGF1dG9tYXRpYyBwYXJ0aXRpb25pbmcsIHRoYXQgaXMsIHlvdSBkbyBub3QgbmVlZCB0byBzcGVjaWZ5IGEgcGFydGl0aW9uIGtleSB3aGVuIGNyZWF0aW5nIGEgdGFibGU7XG4gICAgICogLSAqKmRyZHMqKjogZGF0YWJhc2VzIGluIHRoaXMgbW9kZSBkbyBub3Qgc3VwcG9ydCBhdXRvbWF0aWMgcGFydGl0aW9uaW5nLiBXaGVuIGNyZWF0aW5nIHRhYmxlcywgeW91IG11c3QgdXNlIHRoZSBkZWRpY2F0ZWQgZGF0YWJhc2UgU2hhcmQgc3ludGF4IGFuZCBzcGVjaWZ5IHRoZSBkYXRhYmFzZSBzaGFyZCBrZXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UG9sYXJEQlg6OkRhdGFiYXNlYFxuICovXG5leHBvcnQgY2xhc3MgRGF0YWJhc2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY291bnRzOiBMaXN0IG9mIGFjY291bnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDaGFyYWN0ZXJTZXROYW1lOiBDaGFyYWN0ZXIgc2V0LCB3aGljaCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIGNoYXJhY3RlciBzZXRzOi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYXJhY3RlclNldE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYkluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEYXRhYmFzZURlc2NyaXB0aW9uOiBEYXRhYmFzZSBkZXNjcmlwdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFiYXNlRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEYXRhYmFzZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFiYXNlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlBvbGFyREJYOjpEYXRhYmFzZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRGF0YWJhc2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEYXRhYmFzZSA9IG5ldyBSb3NEYXRhYmFzZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNoYXJhY3RlclNldE5hbWU6IHByb3BzLmNoYXJhY3RlclNldE5hbWUsXG4gICAgICAgICAgICBkYkluc3RhbmNlSWQ6IHByb3BzLmRiSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIG1vZGU6IHByb3BzLm1vZGUsXG4gICAgICAgICAgICBkYXRhYmFzZU5hbWU6IHByb3BzLmRhdGFiYXNlTmFtZSxcbiAgICAgICAgICAgIGRhdGFiYXNlRGVzY3JpcHRpb246IHByb3BzLmRhdGFiYXNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhY2NvdW50czogcHJvcHMuYWNjb3VudHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRGF0YWJhc2U7XG4gICAgICAgIHRoaXMuYXR0ckFjY291bnRzID0gcm9zRGF0YWJhc2UuYXR0ckFjY291bnRzO1xuICAgICAgICB0aGlzLmF0dHJDaGFyYWN0ZXJTZXROYW1lID0gcm9zRGF0YWJhc2UuYXR0ckNoYXJhY3RlclNldE5hbWU7XG4gICAgICAgIHRoaXMuYXR0ckRiSW5zdGFuY2VJZCA9IHJvc0RhdGFiYXNlLmF0dHJEYkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0ckRhdGFiYXNlRGVzY3JpcHRpb24gPSByb3NEYXRhYmFzZS5hdHRyRGF0YWJhc2VEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyRGF0YWJhc2VOYW1lID0gcm9zRGF0YWJhc2UuYXR0ckRhdGFiYXNlTmFtZTtcbiAgICB9XG59XG4iXX0=