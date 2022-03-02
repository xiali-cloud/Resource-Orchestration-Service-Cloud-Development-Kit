using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps")]
    public class RosMasterSlaveServerGroupProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosMasterSlaveServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LoadBalancerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveBackendServers: A list of active/standby server group.
        /// An active/standby server group can only contain two backend servers.
        /// </remarks>
        [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object MasterSlaveBackendServers
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveServerGroupName: The name of the active/standby server group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MasterSlaveServerGroupName
        {
            get;
            set;
        }
    }
}
