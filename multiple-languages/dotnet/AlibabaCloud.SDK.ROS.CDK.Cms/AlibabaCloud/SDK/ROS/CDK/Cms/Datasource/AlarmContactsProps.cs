using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CMS::AlarmContacts`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.datasource.AlarmContactsProps")]
    public class AlarmContactsProps : AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactsProps
    {
        private object? _alarmContactName;

        /// <summary>Property alarmContactName: The name of the alert contact.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "alarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AlarmContactName
        {
            get => _alarmContactName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _alarmContactName = value;
            }
        }
    }
}
