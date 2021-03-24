using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::Listener`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosListenerProps")]
    public class RosListenerProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosListenerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: backendServerPort: Backend server can listen on ports from 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "backendServerPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double BackendServerPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: Port for front listener. Range from 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ListenerPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer to create listener.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LoadBalancerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Protocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aclId: The ID of the access control list associated with the listener to be created.
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AclId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aclStatus: Indicates whether to enable access control.
        /// Valid values: on | off. Default value: off
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AclStatus
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aclType: The access control type:
        /// * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
        /// Enabling a whitelist poses some risks to your services.
        /// After a whitelist is enabled, only the IP addresses in the list can access the listener.
        /// If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
        /// * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
        /// If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
        /// 
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AclType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: caCertificateId: CA server certificate id, for https listener only.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CaCertificateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheck: The properties of health checking setting.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheck", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? HealthCheck
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpConfig: Config for http protocol.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? HttpConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? IdleTimeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterSlaveServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterSlaveServerGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: persistence: The properties of persistence.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "persistence", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PersistenceProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Persistence
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RequestTimeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scheduler", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Scheduler
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverCertificateId: Server certificate id, for https listener only, this properties is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ServerCertificateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupId: The id of the VServerGroup which use in listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VServerGroupId
        {
            get;
            set;
        }
    }
}
