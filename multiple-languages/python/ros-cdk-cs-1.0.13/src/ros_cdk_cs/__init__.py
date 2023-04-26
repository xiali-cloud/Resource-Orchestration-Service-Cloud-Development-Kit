'''
## Aliyun ROS CS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CS from '@alicloud/ros-cdk-cs';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class AnyCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.AnyCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::AnyCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AnyClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::AnyCluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca85d1ea0799d491f8c7fcd460f4fd4d6dce36dba6e9476ea3d0b7593a9bf227)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.AnyClusterProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_config": "clusterConfig"},
)
class AnyClusterProps:
    def __init__(
        self,
        *,
        cluster_config: typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::AnyCluster``.

        :param cluster_config: Property clusterConfig: Cluster config.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7eeb1f3250765f14389f3dc05fe896a294e5f946c9928a868f0416e2387a177e)
            check_type(argname="argument cluster_config", value=cluster_config, expected_type=type_hints["cluster_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_config": cluster_config,
        }

    @builtins.property
    def cluster_config(
        self,
    ) -> typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterConfig: Cluster config.'''
        result = self._values.get("cluster_config")
        assert result is not None, "Required property 'cluster_config' is missing"
        return typing.cast(typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AnyClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterAddons(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ClusterAddons",
):
    '''A ROS resource type:  ``ALIYUN::CS::ClusterAddons``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterAddonsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterAddons``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ff3045e3c4aad7341ddba9b56c325f4da896f5c5965b980d1bb61839abb6184)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ClusterAddonsProps",
    jsii_struct_bases=[],
    name_mapping={
        "addons": "addons",
        "cluster_id": "clusterId",
        "installed_ignore": "installedIgnore",
    },
)
class ClusterAddonsProps:
    def __init__(
        self,
        *,
        addons: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterAddons.AddonsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        installed_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterAddons``.

        :param addons: Property addons: A combination of addon plugins for Kubernetes clusters. Network plug-in: including Flannel and Terway network plug-ins Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used. Ingress: The installation of the Ingress component is enabled by default.
        :param cluster_id: Property clusterId: Cluster ID.
        :param installed_ignore: Property installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage. Default false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24a3eac3d743a672c08e6e4b94c9a877f15371deda815baee9cf743427ba8612)
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument installed_ignore", value=installed_ignore, expected_type=type_hints["installed_ignore"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addons": addons,
            "cluster_id": cluster_id,
        }
        if installed_ignore is not None:
            self._values["installed_ignore"] = installed_ignore

    @builtins.property
    def addons(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterAddons.AddonsProperty"]]]:
        '''Property addons: A combination of addon plugins for Kubernetes clusters.

        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        assert result is not None, "Required property 'addons' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterAddons.AddonsProperty"]]], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def installed_ignore(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property installedIgnore: Whether to ignore already installed addons when creating.

        If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
        Default false.
        '''
        result = self._values.get("installed_ignore")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterAddonsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterApplication(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ClusterApplication",
):
    '''A ROS resource type:  ``ALIYUN::CS::ClusterApplication``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterApplication``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__640f1c0c779ccf5b1be22f68ee225c7b308ddeba6d14590f8b3cf361a42392d4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ClusterApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "yaml_content": "yamlContent",
        "default_namespace": "defaultNamespace",
        "default_namespace_deletion": "defaultNamespaceDeletion",
    },
)
class ClusterApplicationProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        yaml_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_namespace_deletion: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterApplication``.

        :param cluster_id: Property clusterId: The ID of the kubernetes cluster.
        :param yaml_content: Property yamlContent: The yaml content of application.
        :param default_namespace: Property defaultNamespace: The default namespace for the application, default value is default. If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        :param default_namespace_deletion: Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f98845f71d920946dbf907abb8e6b6a1833417acf45d35c4876a7ab195044048)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument yaml_content", value=yaml_content, expected_type=type_hints["yaml_content"])
            check_type(argname="argument default_namespace", value=default_namespace, expected_type=type_hints["default_namespace"])
            check_type(argname="argument default_namespace_deletion", value=default_namespace_deletion, expected_type=type_hints["default_namespace_deletion"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "yaml_content": yaml_content,
        }
        if default_namespace is not None:
            self._values["default_namespace"] = default_namespace
        if default_namespace_deletion is not None:
            self._values["default_namespace_deletion"] = default_namespace_deletion

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The ID of the kubernetes cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def yaml_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property yamlContent: The yaml content of application.'''
        result = self._values.get("yaml_content")
        assert result is not None, "Required property 'yaml_content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultNamespace: The default namespace for the application, default value is default.

        If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        '''
        result = self._values.get("default_namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_namespace_deletion(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.

        If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
        '''
        result = self._values.get("default_namespace_deletion")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterHelmApplication(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ClusterHelmApplication",
):
    '''A ROS resource type:  ``ALIYUN::CS::ClusterHelmApplication``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterHelmApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterHelmApplication``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b451f869c856f45e7df042627736dfcb76ea6bd0770b7dc6ebd37e6e9623e698)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ClusterHelmApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "chart_url": "chartUrl",
        "cluster_id": "clusterId",
        "name": "name",
        "chart_values": "chartValues",
        "namespace": "namespace",
    },
)
class ClusterHelmApplicationProps:
    def __init__(
        self,
        *,
        chart_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        chart_values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterHelmApplication``.

        :param chart_url: Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
        :param cluster_id: Property clusterId: The ID of the kubernetes cluster.
        :param name: Property name: The name for helm release.
        :param chart_values: Property chartValues: Chart custom values.
        :param namespace: Property namespace: Namespace to use with helm. Default is default
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8521b5c71abb1f0c91a08c8fe1abc80f7d49867c554c0ae70273c559fa49f5ec)
            check_type(argname="argument chart_url", value=chart_url, expected_type=type_hints["chart_url"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument chart_values", value=chart_values, expected_type=type_hints["chart_values"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chart_url": chart_url,
            "cluster_id": cluster_id,
            "name": name,
        }
        if chart_values is not None:
            self._values["chart_values"] = chart_values
        if namespace is not None:
            self._values["namespace"] = namespace

    @builtins.property
    def chart_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chartUrl: The URL of chart.

        Supports HTTP or HTTPS.
        '''
        result = self._values.get("chart_url")
        assert result is not None, "Required property 'chart_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: The ID of the kubernetes cluster.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name for helm release.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def chart_values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property chartValues: Chart custom values.'''
        result = self._values.get("chart_values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespace: Namespace to use with helm.

        Default is default
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterHelmApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ClusterNodePool(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ClusterNodePool",
):
    '''A ROS resource type:  ``ALIYUN::CS::ClusterNodePool``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterNodePoolProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterNodePool``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eedee08bc3c96073ed108875d755dcae506a71dd21aad1ae580c9ae0aa8f28e8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNodePoolId")
    def attr_node_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodePoolId: Cluster node pool ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodePoolId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ClusterNodePoolProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "scaling_group": "scalingGroup",
        "auto_scaling": "autoScaling",
        "count": "count",
        "kubernetes_config": "kubernetesConfig",
        "management": "management",
        "node_pool_info": "nodePoolInfo",
        "tee_config": "teeConfig",
    },
)
class ClusterNodePoolProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.ScalingGroupProperty", typing.Dict[builtins.str, typing.Any]]],
        auto_scaling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.AutoScalingProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.KubernetesConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        management: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.ManagementProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.NodePoolInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tee_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.TeeConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterNodePool``.

        :param cluster_id: Property clusterId: Cluster ID.
        :param scaling_group: Property scalingGroup: The configurations of the scaling group used by the node pool.
        :param auto_scaling: Property autoScaling: The configurations of auto scaling.
        :param count: Property count: The number of nodes in the node pool.
        :param kubernetes_config: Property kubernetesConfig: The configurations of the ACK cluster.
        :param management: Property management: The configurations of the managed node pool.
        :param node_pool_info: Property nodePoolInfo: The configurations of the node pool.
        :param tee_config: Property teeConfig: The configurations of confidential computing.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71e51e7f239a3cd9e134dd378ff3d55bc493c8e3326397f8889705b7295eb76a)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument scaling_group", value=scaling_group, expected_type=type_hints["scaling_group"])
            check_type(argname="argument auto_scaling", value=auto_scaling, expected_type=type_hints["auto_scaling"])
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
            check_type(argname="argument kubernetes_config", value=kubernetes_config, expected_type=type_hints["kubernetes_config"])
            check_type(argname="argument management", value=management, expected_type=type_hints["management"])
            check_type(argname="argument node_pool_info", value=node_pool_info, expected_type=type_hints["node_pool_info"])
            check_type(argname="argument tee_config", value=tee_config, expected_type=type_hints["tee_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "scaling_group": scaling_group,
        }
        if auto_scaling is not None:
            self._values["auto_scaling"] = auto_scaling
        if count is not None:
            self._values["count"] = count
        if kubernetes_config is not None:
            self._values["kubernetes_config"] = kubernetes_config
        if management is not None:
            self._values["management"] = management
        if node_pool_info is not None:
            self._values["node_pool_info"] = node_pool_info
        if tee_config is not None:
            self._values["tee_config"] = tee_config

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterId: Cluster ID.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scaling_group(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ScalingGroupProperty"]:
        '''Property scalingGroup: The configurations of the scaling group used by the node pool.'''
        result = self._values.get("scaling_group")
        assert result is not None, "Required property 'scaling_group' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ScalingGroupProperty"], result)

    @builtins.property
    def auto_scaling(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.AutoScalingProperty"]]:
        '''Property autoScaling: The configurations of auto scaling.'''
        result = self._values.get("auto_scaling")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.AutoScalingProperty"]], result)

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property count: The number of nodes in the node pool.'''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]]:
        '''Property kubernetesConfig: The configurations of the ACK cluster.'''
        result = self._values.get("kubernetes_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]], result)

    @builtins.property
    def management(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ManagementProperty"]]:
        '''Property management: The configurations of the managed node pool.'''
        result = self._values.get("management")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ManagementProperty"]], result)

    @builtins.property
    def node_pool_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]]:
        '''Property nodePoolInfo: The configurations of the node pool.'''
        result = self._values.get("node_pool_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]], result)

    @builtins.property
    def tee_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TeeConfigProperty"]]:
        '''Property teeConfig: The configurations of confidential computing.'''
        result = self._values.get("tee_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TeeConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterNodePoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KubernetesCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.KubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::KubernetesCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["KubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::KubernetesCluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3667bf80fa8ef6bbc84b7e40e95b20275faf32cac3fec5466c6e0a923642df1e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.KubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "master_instance_types": "masterInstanceTypes",
        "master_v_switch_ids": "masterVSwitchIds",
        "name": "name",
        "vpc_id": "vpcId",
        "worker_v_switch_ids": "workerVSwitchIds",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "cpu_policy": "cpuPolicy",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "master_count": "masterCount",
        "master_data_disk": "masterDataDisk",
        "master_data_disks": "masterDataDisks",
        "master_system_disk_category": "masterSystemDiskCategory",
        "master_system_disk_performance_level": "masterSystemDiskPerformanceLevel",
        "master_system_disk_size": "masterSystemDiskSize",
        "master_system_disk_snapshot_policy_id": "masterSystemDiskSnapshotPolicyId",
        "master_zone_ids": "masterZoneIds",
        "node_cidr_mask": "nodeCidrMask",
        "node_name_mode": "nodeNameMode",
        "node_pools": "nodePools",
        "node_port_range": "nodePortRange",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "ssh_flags": "sshFlags",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "time_zone": "timeZone",
        "user_ca": "userCa",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "worker_system_disk_snapshot_policy_id": "workerSystemDiskSnapshotPolicyId",
        "worker_zone_ids": "workerZoneIds",
    },
)
class KubernetesClusterProps:
    def __init__(
        self,
        *,
        master_instance_types: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        master_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        worker_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.AddonsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.MasterDataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        master_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.NodePoolsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        node_port_range: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.RuntimeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssh_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosKubernetesCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_ca: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.WorkerDataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::KubernetesCluster``.

        :param master_instance_types: Property masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds. List size must be 3, Instance Type can be repeated.
        :param master_v_switch_ids: Property masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param vpc_id: Property vpcId: VPC ID.
        :param worker_v_switch_ids: Property workerVSwitchIds: The virtual switch ID of the worker node.
        :param addons: Property addons: A combination of addon plugins for Kubernetes clusters. Network plug-in: including Flannel and Terway network plug-ins Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used. Ingress: The installation of the Ingress component is enabled by default.
        :param auto_renew: Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are: true: automatic renewal false: do not renew automatically Default to true.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
        :param charge_type: Property chargeType: cluster payment type. The optional values are: PrePaid: prepaid PostPaid: Pay as you go Default to PostPaid.
        :param cis_enabled: Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement. For more information, see CIS reinforcement. Valid values: true: enables CIS reinforcement. false: disables CIS reinforcement. Default value: false.
        :param cloud_monitor_flags: Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
        :param container_cidr: Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        :param cpu_policy: Property cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param disable_rollback: Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        :param format_disk: Property formatDisk: Specifies whether to mount a data disk to nodes that are created on existing Elastic Compute Service (ECS) instances. Valid values: true: stores the data of containers and images on a data disk. The original data on the disk will be overwritten. Back up data before you mount the disk. false: does not store the data of containers and images on a data disk. Default value: false. How to mount a data disk: If the ECS instances have data disks mounted and the file system of the last data disk is not initialized, the system automatically formats the data disk to ext4. Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet. The system does not create or mount a new data disk if no data disk has been mounted to the ECS instances.
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter takes effect only if security_group_id is left empty. Note You must specify an advanced security group for a cluster that has Terway installed. true: creates an advanced security group. false: does not create an advanced security group. Default value: false.
        :param keep_instance_name: Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster. true: retains the names. false: does not retain the names. The new names are assigned by the system. Default value: true.
        :param key_pair: Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        :param kubernetes_version: Property kubernetesVersion: The version of the Kubernetes cluster.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        :param login_password: Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        :param master_count: Property masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        :param master_data_disk: Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
        :param master_data_disks: Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        :param master_system_disk_category: Property masterSystemDiskCategory: Master disk system disk type. The value includes: cloud_efficiency: efficient cloud disk cloud_ssd: SSD cloud disk cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        :param master_system_disk_performance_level: Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node. Valid values: PL0|PL1|PL2|PL3
        :param master_system_disk_size: Property masterSystemDiskSize: Master disk system disk size in GiB. Default to 120.
        :param master_system_disk_snapshot_policy_id: Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
        :param master_zone_ids: Property masterZoneIds: Zone ids of master node virtual switches belongs to.
        :param node_cidr_mask: Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        :param node_name_mode: Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test. - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit. - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        :param node_pools: Property nodePools: The configurations of Node pools.
        :param node_port_range: Property nodePortRange: Node service port. The value range is [30000, 65535]. Default to 30000-65535.
        :param num_of_nodes: Property numOfNodes: Number of worker nodes. The range is [0,300]. Default to 3.
        :param os_type: Property osType: The type of operating system. Valid values: Windows Linux Default value: Linux.
        :param period: Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is: When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"} When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"} Default to 1.
        :param period_unit: Property periodUnit: When you specify PrePaid, you need to specify the period. The options are: Week: Time is measured in weeks Month: time in months Year: time in years Default to Month
        :param platform: Property platform: The release version of the operating system. Valid values: CentOS AliyunLinux QbootAliyunLinux Qboot Windows WindowsCore Default value: CentOS.
        :param pod_vswitch_ids: Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, you must specify at least one pod vSwitch in the same zone. The pod vSwitches cannot be the same as the node vSwitches. We recommend that you set the mask length of the CIDR block to a value no greater than 19 for the pod vSwitches. The pod_vswitch_ids parameter is required when the Terway network plug-in is selected for the cluster.
        :param proxy_mode: Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param runtime: Property runtime: The container runtime of the cluster. The default runtime is Docker.
        :param security_group_id: Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param soc_enabled: Property socEnabled: Valid values: true: enables reinforcement based on classified protection. false: disables reinforcement based on classified protection. Default value: false.
        :param ssh_flags: Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
        :param tags: Property tags: Tag the cluster.
        :param taint: Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        :param timeout_mins: Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        :param time_zone: Property timeZone: The time zone of the cluster.
        :param user_ca: Property userCa: The CA of cluster.
        :param user_data: Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        :param worker_data_disk: Property workerDataDisk: Whether to mount the data disk. The options are as follows: true: indicates that the worker node mounts data disks. false: indicates that the worker node does not mount data disks. Default to false.
        :param worker_data_disks: Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        :param worker_instance_types: Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        :param worker_system_disk_category: Property workerSystemDiskCategory: Worker node system disk type. The value includes: cloud_efficiency: efficient cloud disk cloud_ssd: SSD cloud disk Default to cloud_efficiency.
        :param worker_system_disk_size: Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. Default to 120.
        :param worker_system_disk_snapshot_policy_id: Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
        :param worker_zone_ids: Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c814b20919a31fc84e924e092c3c269fea79729db0b612d29db6fe4f9e1380e6)
            check_type(argname="argument master_instance_types", value=master_instance_types, expected_type=type_hints["master_instance_types"])
            check_type(argname="argument master_v_switch_ids", value=master_v_switch_ids, expected_type=type_hints["master_v_switch_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument worker_v_switch_ids", value=worker_v_switch_ids, expected_type=type_hints["worker_v_switch_ids"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cis_enabled", value=cis_enabled, expected_type=type_hints["cis_enabled"])
            check_type(argname="argument cloud_monitor_flags", value=cloud_monitor_flags, expected_type=type_hints["cloud_monitor_flags"])
            check_type(argname="argument container_cidr", value=container_cidr, expected_type=type_hints["container_cidr"])
            check_type(argname="argument cpu_policy", value=cpu_policy, expected_type=type_hints["cpu_policy"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument disable_rollback", value=disable_rollback, expected_type=type_hints["disable_rollback"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument format_disk", value=format_disk, expected_type=type_hints["format_disk"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument keep_instance_name", value=keep_instance_name, expected_type=type_hints["keep_instance_name"])
            check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
            check_type(argname="argument kubernetes_version", value=kubernetes_version, expected_type=type_hints["kubernetes_version"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
            check_type(argname="argument master_count", value=master_count, expected_type=type_hints["master_count"])
            check_type(argname="argument master_data_disk", value=master_data_disk, expected_type=type_hints["master_data_disk"])
            check_type(argname="argument master_data_disks", value=master_data_disks, expected_type=type_hints["master_data_disks"])
            check_type(argname="argument master_system_disk_category", value=master_system_disk_category, expected_type=type_hints["master_system_disk_category"])
            check_type(argname="argument master_system_disk_performance_level", value=master_system_disk_performance_level, expected_type=type_hints["master_system_disk_performance_level"])
            check_type(argname="argument master_system_disk_size", value=master_system_disk_size, expected_type=type_hints["master_system_disk_size"])
            check_type(argname="argument master_system_disk_snapshot_policy_id", value=master_system_disk_snapshot_policy_id, expected_type=type_hints["master_system_disk_snapshot_policy_id"])
            check_type(argname="argument master_zone_ids", value=master_zone_ids, expected_type=type_hints["master_zone_ids"])
            check_type(argname="argument node_cidr_mask", value=node_cidr_mask, expected_type=type_hints["node_cidr_mask"])
            check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
            check_type(argname="argument node_pools", value=node_pools, expected_type=type_hints["node_pools"])
            check_type(argname="argument node_port_range", value=node_port_range, expected_type=type_hints["node_port_range"])
            check_type(argname="argument num_of_nodes", value=num_of_nodes, expected_type=type_hints["num_of_nodes"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument pod_vswitch_ids", value=pod_vswitch_ids, expected_type=type_hints["pod_vswitch_ids"])
            check_type(argname="argument proxy_mode", value=proxy_mode, expected_type=type_hints["proxy_mode"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument soc_enabled", value=soc_enabled, expected_type=type_hints["soc_enabled"])
            check_type(argname="argument ssh_flags", value=ssh_flags, expected_type=type_hints["ssh_flags"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument taint", value=taint, expected_type=type_hints["taint"])
            check_type(argname="argument timeout_mins", value=timeout_mins, expected_type=type_hints["timeout_mins"])
            check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            check_type(argname="argument user_ca", value=user_ca, expected_type=type_hints["user_ca"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument worker_data_disk", value=worker_data_disk, expected_type=type_hints["worker_data_disk"])
            check_type(argname="argument worker_data_disks", value=worker_data_disks, expected_type=type_hints["worker_data_disks"])
            check_type(argname="argument worker_instance_types", value=worker_instance_types, expected_type=type_hints["worker_instance_types"])
            check_type(argname="argument worker_system_disk_category", value=worker_system_disk_category, expected_type=type_hints["worker_system_disk_category"])
            check_type(argname="argument worker_system_disk_size", value=worker_system_disk_size, expected_type=type_hints["worker_system_disk_size"])
            check_type(argname="argument worker_system_disk_snapshot_policy_id", value=worker_system_disk_snapshot_policy_id, expected_type=type_hints["worker_system_disk_snapshot_policy_id"])
            check_type(argname="argument worker_zone_ids", value=worker_zone_ids, expected_type=type_hints["worker_zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "master_instance_types": master_instance_types,
            "master_v_switch_ids": master_v_switch_ids,
            "name": name,
            "vpc_id": vpc_id,
            "worker_v_switch_ids": worker_v_switch_ids,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if cpu_policy is not None:
            self._values["cpu_policy"] = cpu_policy
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if master_count is not None:
            self._values["master_count"] = master_count
        if master_data_disk is not None:
            self._values["master_data_disk"] = master_data_disk
        if master_data_disks is not None:
            self._values["master_data_disks"] = master_data_disks
        if master_system_disk_category is not None:
            self._values["master_system_disk_category"] = master_system_disk_category
        if master_system_disk_performance_level is not None:
            self._values["master_system_disk_performance_level"] = master_system_disk_performance_level
        if master_system_disk_size is not None:
            self._values["master_system_disk_size"] = master_system_disk_size
        if master_system_disk_snapshot_policy_id is not None:
            self._values["master_system_disk_snapshot_policy_id"] = master_system_disk_snapshot_policy_id
        if master_zone_ids is not None:
            self._values["master_zone_ids"] = master_zone_ids
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if node_name_mode is not None:
            self._values["node_name_mode"] = node_name_mode
        if node_pools is not None:
            self._values["node_pools"] = node_pools
        if node_port_range is not None:
            self._values["node_port_range"] = node_port_range
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if ssh_flags is not None:
            self._values["ssh_flags"] = ssh_flags
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if time_zone is not None:
            self._values["time_zone"] = time_zone
        if user_ca is not None:
            self._values["user_ca"] = user_ca
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if worker_system_disk_snapshot_policy_id is not None:
            self._values["worker_system_disk_snapshot_policy_id"] = worker_system_disk_snapshot_policy_id
        if worker_zone_ids is not None:
            self._values["worker_zone_ids"] = worker_zone_ids

    @builtins.property
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property masterInstanceTypes: Master node ECS specification type code.

        For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        '''
        result = self._values.get("master_instance_types")
        assert result is not None, "Required property 'master_instance_types' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property masterVSwitchIds: Master node switch ID.

        To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        '''
        result = self._values.get("master_v_switch_ids")
        assert result is not None, "Required property 'master_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workerVSwitchIds: The virtual switch ID of the worker node.'''
        result = self._values.get("worker_v_switch_ids")
        assert result is not None, "Required property 'worker_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]]:
        '''Property addons: A combination of addon plugins for Kubernetes clusters.

        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether the cluster automatically renews.

        It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: cluster payment type.

        The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.

        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.'''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerCidr: The container network segment cannot conflict with the VPC network segment.

        When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cpu_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cpuPolicy: CPU policy.

        The cluster version is 1.12.6 and above supports both static and none strategies.
        '''
        result = self._values.get("cpu_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.

        If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.

        Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.

        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.

        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPair: Key pair name.

        Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kubernetesVersion: The version of the Kubernetes cluster.'''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loginPassword: SSH login password.

        Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterCount: Number of master instances.

        The value can be 3 or 5. The default value is 3.
        '''
        result = self._values.get("master_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.'''
        result = self._values.get("master_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]]:
        '''Property masterDataDisks: Master data disk type, size and other configuration combinations.

        This parameter is valid only when the master node data disk is mounted.
        '''
        result = self._values.get("master_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]], result)

    @builtins.property
    def master_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterSystemDiskCategory: Master disk system disk type.

        The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        '''
        result = self._values.get("master_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.

        Valid values: PL0|PL1|PL2|PL3
        '''
        result = self._values.get("master_system_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterSystemDiskSize: Master disk system disk size in GiB.

        Default to 120.
        '''
        result = self._values.get("master_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.'''
        result = self._values.get("master_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property masterZoneIds: Zone ids of master node virtual switches belongs to.'''
        result = self._values.get("master_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.

        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_name_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix.

        The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

        - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
        - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        '''
        result = self._values.get("node_name_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_pools(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolsProperty"]]]]:
        '''Property nodePools: The configurations of Node pools.'''
        result = self._values.get("node_pools")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolsProperty"]]]], result)

    @builtins.property
    def node_port_range(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodePortRange: Node service port.

        The value range is [30000, 65535].
        Default to 30000-65535.
        '''
        result = self._values.get("node_port_range")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property numOfNodes: Number of worker nodes.

        The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osType: The type of operating system.

        Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The duration of the annual subscription and monthly subscription.

        It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: When you specify PrePaid, you need to specify the period.

        The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property platform: The release version of the operating system.

        Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property podVswitchIds: The list of pod vSwitches.

        For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.

        The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.RuntimeProperty"]]:
        '''Property runtime: The container runtime of the cluster.

        The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.RuntimeProperty"]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property socEnabled: Valid values: true: enables reinforcement based on classified protection.

        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sshFlags: Whether to enable public network SSH login: true: open false: not open.'''
        result = self._values.get("ssh_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''Property taint: It is used to mark nodes with taints.

        It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeoutMins: Cluster resource stack creation timeout, in minutes.

        The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeZone: The time zone of the cluster.'''
        result = self._values.get("time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userCa: The CA of cluster.'''
        result = self._values.get("user_ca")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userData: The user-defined data.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerDataDisk: Whether to mount the data disk.

        The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''Property workerDataDisks: A combination of configurations such as worker data disk type and size.

        This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property workerInstanceTypes: Worker node ECS specification type code.

        For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskCategory: Worker node system disk type.

        The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.

        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.'''
        result = self._values.get("worker_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property workerZoneIds: Zone ids of worker node virtual switches belongs to.'''
        result = self._values.get("worker_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedEdgeKubernetesCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ManagedEdgeKubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ManagedEdgeKubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3b2ea5a80aec858c2a8b8da09173d26ead6817ba3c91b198e26bf9fd30cabbd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "num_of_nodes": "numOfNodes",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "key_pair": "keyPair",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "period": "period",
        "period_unit": "periodUnit",
        "profile": "profile",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "timeout_mins": "timeoutMins",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disk_category": "workerDataDiskCategory",
        "worker_data_disks": "workerDataDisks",
        "worker_data_disk_size": "workerDataDiskSize",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "zone_ids": "zoneIds",
    },
)
class ManagedEdgeKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        num_of_nodes: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedEdgeKubernetesCluster.AddonsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosManagedEdgeKubernetesCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        worker_data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param num_of_nodes: Property numOfNodes: Number of worker nodes. The range is [0,300]
        :param addons: Property addons: The add-ons to be installed for the cluster.
        :param auto_renew: Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are: true: automatic renewal false: do not renew automatically Default to true.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
        :param charge_type: Property chargeType: cluster payment type. The optional values are: PrePaid: prepaid PostPaid: Pay as you go Default to PostPaid.
        :param cloud_monitor_flags: Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
        :param cluster_spec: Property clusterSpec: The edge managed cluster spec. Value: ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster". ack.standard: Standard hosting cluster. Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        :param container_cidr: Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param disable_rollback: Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter takes effect only if security_group_id is left empty. Note You must specify an advanced security group for a cluster that has Terway installed. true: creates an advanced security group. false: does not create an advanced security group. Default value: false.
        :param key_pair: Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        :param login_password: Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        :param node_cidr_mask: Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        :param period: Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is: When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"} When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"} Default to 1.
        :param period_unit: Property periodUnit: When you specify PrePaid, you need to specify the period. The options are: Week: Time is measured in weeks Month: time in months Year: time in years Default to Month
        :param profile: Property profile: Edge cluster ID. The default value is Edge.
        :param proxy_mode: Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param tags: Property tags: Tag the cluster.
        :param timeout_mins: Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        :param vpc_id: Property vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16. VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        :param v_switch_ids: Property vSwitchIds: The virtual switch ID of the worker node.
        :param worker_data_disk: Property workerDataDisk: Whether to mount the data disk. The options are as follows: true: indicates that the worker node mounts data disks. false: indicates that the worker node does not mount data disks. Default to false.
        :param worker_data_disk_category: Property workerDataDiskCategory: Data disk type.
        :param worker_data_disks: Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        :param worker_data_disk_size: Property workerDataDiskSize: Data disk size in GiB.
        :param worker_instance_types: Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        :param worker_system_disk_category: Property workerSystemDiskCategory: Worker node system disk type. Default to cloud_efficiency.
        :param worker_system_disk_size: Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. Default to 120.
        :param zone_ids: Property zoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16ec2e4a2fbaec4a0c2e41642791d36f29f0047605f4279b73b1b1a37dc3920d)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument num_of_nodes", value=num_of_nodes, expected_type=type_hints["num_of_nodes"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cloud_monitor_flags", value=cloud_monitor_flags, expected_type=type_hints["cloud_monitor_flags"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument container_cidr", value=container_cidr, expected_type=type_hints["container_cidr"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument disable_rollback", value=disable_rollback, expected_type=type_hints["disable_rollback"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
            check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
            check_type(argname="argument node_cidr_mask", value=node_cidr_mask, expected_type=type_hints["node_cidr_mask"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument profile", value=profile, expected_type=type_hints["profile"])
            check_type(argname="argument proxy_mode", value=proxy_mode, expected_type=type_hints["proxy_mode"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timeout_mins", value=timeout_mins, expected_type=type_hints["timeout_mins"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument worker_data_disk", value=worker_data_disk, expected_type=type_hints["worker_data_disk"])
            check_type(argname="argument worker_data_disk_category", value=worker_data_disk_category, expected_type=type_hints["worker_data_disk_category"])
            check_type(argname="argument worker_data_disks", value=worker_data_disks, expected_type=type_hints["worker_data_disks"])
            check_type(argname="argument worker_data_disk_size", value=worker_data_disk_size, expected_type=type_hints["worker_data_disk_size"])
            check_type(argname="argument worker_instance_types", value=worker_instance_types, expected_type=type_hints["worker_instance_types"])
            check_type(argname="argument worker_system_disk_category", value=worker_system_disk_category, expected_type=type_hints["worker_system_disk_category"])
            check_type(argname="argument worker_system_disk_size", value=worker_system_disk_size, expected_type=type_hints["worker_system_disk_size"])
            check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "num_of_nodes": num_of_nodes,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if profile is not None:
            self._values["profile"] = profile
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disk_category is not None:
            self._values["worker_data_disk_category"] = worker_data_disk_category
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_data_disk_size is not None:
            self._values["worker_data_disk_size"] = worker_data_disk_size
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if zone_ids is not None:
            self._values["zone_ids"] = zone_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property numOfNodes: Number of worker nodes.

        The range is [0,300]
        '''
        result = self._values.get("num_of_nodes")
        assert result is not None, "Required property 'num_of_nodes' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]]:
        '''Property addons: The add-ons to be installed for the cluster.'''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether the cluster automatically renews.

        It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: cluster payment type.

        The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.'''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterSpec: The edge managed cluster spec.

        Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerCidr: The container network segment cannot conflict with the VPC network segment.

        When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.

        If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.

        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPair: Key pair name.

        Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loginPassword: SSH login password.

        Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.

        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The duration of the annual subscription and monthly subscription.

        It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: When you specify PrePaid, you need to specify the period.

        The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property profile: Edge cluster ID.

        The default value is Edge.
        '''
        result = self._values.get("profile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.

        The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeoutMins: Cluster resource stack creation timeout, in minutes.

        The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: VPC ID.

        If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchIds: The virtual switch ID of the worker node.'''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerDataDisk: Whether to mount the data disk.

        The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerDataDiskCategory: Data disk type.'''
        result = self._values.get("worker_data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''Property workerDataDisks: A combination of configurations such as worker data disk type and size.

        This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty"]]]], result)

    @builtins.property
    def worker_data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerDataDiskSize: Data disk size in GiB.'''
        result = self._values.get("worker_data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property workerInstanceTypes: Worker node ECS specification type code.

        For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskCategory: Worker node system disk type.

        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.

        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property zoneIds: Zone ids of worker node virtual switches belongs to.'''
        result = self._values.get("zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedEdgeKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedKubernetesCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.ManagedKubernetesCluster",
):
    '''A ROS resource type:  ``ALIYUN::CS::ManagedKubernetesCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ManagedKubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedKubernetesCluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8844bec6f7a909ccdfc4f876eea53dd8da4c37e355b074f1d327f15d22fb8045)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute APIServerSLBId: The id of API server SLB.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: Cluster instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Nodes: The list of cluster nodes.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurationId: Scaling configuration id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupId: Scaling group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingRuleId: Scaling rule id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: Task ID.

        Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkerRamRoleName: Worker ram role name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "encryption_provider_key": "encryptionProviderKey",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "node_name_mode": "nodeNameMode",
        "node_pools": "nodePools",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "zone_ids": "zoneIds",
    },
)
class ManagedKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.AddonsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_provider_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.NodePoolsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.RuntimeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosManagedKubernetesCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.WorkerDataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param name: Property name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        :param vpc_id: Property vpcId: VPC ID.
        :param v_switch_ids: Property vSwitchIds: The virtual switch ID of the worker node.
        :param addons: Property addons: A combination of addon plugins for Kubernetes clusters. Network plug-in: including Flannel and Terway network plug-ins Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used. Ingress: The installation of the Ingress component is enabled by default.
        :param auto_renew: Property autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are: true: automatic renewal false: do not renew automatically Default to true.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
        :param charge_type: Property chargeType: cluster payment type. The optional values are: PrePaid: prepaid PostPaid: Pay as you go Default to PostPaid.
        :param cis_enabled: Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement. For more information, see CIS reinforcement. Valid values: true: enables CIS reinforcement. false: disables CIS reinforcement. Default value: false.
        :param cloud_monitor_flags: Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
        :param cluster_spec: Property clusterSpec: The managed cluster spec. Value: ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster". ack.standard: Standard hosting cluster. Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        :param container_cidr: Property containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        :param deletion_protection: Property deletionProtection: Specifies whether to enable deletion protection for the cluster. After deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster. false: disables deletion protection for the cluster. Default value: false.
        :param disable_rollback: Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        :param encryption_provider_key: Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        :param endpoint_public_access: Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        :param format_disk: Property formatDisk: Specifies whether to mount a data disk to nodes that are created on existing Elastic Compute Service (ECS) instances. Valid values: true: stores the data of containers and images on a data disk. The original data on the disk will be overwritten. Back up data before you mount the disk. false: does not store the data of containers and images on a data disk. Default value: false. How to mount a data disk: If the ECS instances have data disks mounted and the file system of the last data disk is not initialized, the system automatically formats the data disk to ext4. Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet. The system does not create or mount a new data disk if no data disk has been mounted to the ECS instances.
        :param is_enterprise_security_group: Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter takes effect only if security_group_id is left empty. Note You must specify an advanced security group for a cluster that has Terway installed. true: creates an advanced security group. false: does not create an advanced security group. Default value: false.
        :param keep_instance_name: Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster. true: retains the names. false: does not retain the names. The new names are assigned by the system. Default value: true.
        :param key_pair: Property keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        :param kubernetes_version: Property kubernetesVersion: The version of the Kubernetes cluster.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        :param login_password: Property loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        :param node_cidr_mask: Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        :param node_name_mode: Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test. - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit. - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        :param node_pools: Property nodePools: The configurations of Node pools.
        :param num_of_nodes: Property numOfNodes: Number of worker nodes. The range is [0,300]. Default to 3.
        :param os_type: Property osType: The type of operating system. Valid values: Windows Linux Default value: Linux.
        :param period: Property period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is: When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"} When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"} Default to 1.
        :param period_unit: Property periodUnit: When you specify PrePaid, you need to specify the period. The options are: Week: Time is measured in weeks Month: time in months Year: time in years Default to Month
        :param platform: Property platform: The release version of the operating system. Valid values: CentOS AliyunLinux QbootAliyunLinux Qboot Windows WindowsCore Default value: CentOS.
        :param pod_vswitch_ids: Property podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes, you must specify at least one pod vSwitch in the same zone. The pod vSwitches cannot be the same as the node vSwitches. We recommend that you set the mask length of the CIDR block to a value no greater than 19 for the pod vSwitches. The pod_vswitch_ids parameter is required when the Terway network plug-in is selected for the cluster.
        :param proxy_mode: Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        :param resource_group_id: Property resourceGroupId: The ID of resource group.
        :param runtime: Property runtime: The container runtime of the cluster. The default runtime is Docker.
        :param security_group_id: Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        :param service_cidr: Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        :param snat_entry: Property snatEntry: Whether to configure SNAT for the network. When a VPC can access the public network environment, set it to false. When an existing VPC cannot access the public network environment: When set to True, SNAT is configured and the public network environment can be accessed at this time. If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time. Default to true.
        :param soc_enabled: Property socEnabled: Valid values: true: enables reinforcement based on classified protection. false: disables reinforcement based on classified protection. Default value: false.
        :param tags: Property tags: Tag the cluster.
        :param taint: Property taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        :param timeout_mins: Property timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        :param user_data: Property userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        :param worker_data_disk: Property workerDataDisk: Whether to mount the data disk. The options are as follows: true: indicates that the worker node mounts data disks. false: indicates that the worker node does not mount data disks. Default to false.
        :param worker_data_disks: Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        :param worker_instance_types: Property workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        :param worker_system_disk_category: Property workerSystemDiskCategory: Worker node system disk type. The value includes: cloud_efficiency: efficient cloud disk cloud_ssd: SSD cloud disk Default to cloud_efficiency.
        :param worker_system_disk_size: Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. Default to 120.
        :param zone_ids: Property zoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__481e54fb4f6105224ef70cb08c26cdccce792ce83361b0d81e58fcb7bbd264dd)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cis_enabled", value=cis_enabled, expected_type=type_hints["cis_enabled"])
            check_type(argname="argument cloud_monitor_flags", value=cloud_monitor_flags, expected_type=type_hints["cloud_monitor_flags"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument container_cidr", value=container_cidr, expected_type=type_hints["container_cidr"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument disable_rollback", value=disable_rollback, expected_type=type_hints["disable_rollback"])
            check_type(argname="argument encryption_provider_key", value=encryption_provider_key, expected_type=type_hints["encryption_provider_key"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument format_disk", value=format_disk, expected_type=type_hints["format_disk"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument keep_instance_name", value=keep_instance_name, expected_type=type_hints["keep_instance_name"])
            check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
            check_type(argname="argument kubernetes_version", value=kubernetes_version, expected_type=type_hints["kubernetes_version"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
            check_type(argname="argument node_cidr_mask", value=node_cidr_mask, expected_type=type_hints["node_cidr_mask"])
            check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
            check_type(argname="argument node_pools", value=node_pools, expected_type=type_hints["node_pools"])
            check_type(argname="argument num_of_nodes", value=num_of_nodes, expected_type=type_hints["num_of_nodes"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument pod_vswitch_ids", value=pod_vswitch_ids, expected_type=type_hints["pod_vswitch_ids"])
            check_type(argname="argument proxy_mode", value=proxy_mode, expected_type=type_hints["proxy_mode"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument soc_enabled", value=soc_enabled, expected_type=type_hints["soc_enabled"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument taint", value=taint, expected_type=type_hints["taint"])
            check_type(argname="argument timeout_mins", value=timeout_mins, expected_type=type_hints["timeout_mins"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument worker_data_disk", value=worker_data_disk, expected_type=type_hints["worker_data_disk"])
            check_type(argname="argument worker_data_disks", value=worker_data_disks, expected_type=type_hints["worker_data_disks"])
            check_type(argname="argument worker_instance_types", value=worker_instance_types, expected_type=type_hints["worker_instance_types"])
            check_type(argname="argument worker_system_disk_category", value=worker_system_disk_category, expected_type=type_hints["worker_system_disk_category"])
            check_type(argname="argument worker_system_disk_size", value=worker_system_disk_size, expected_type=type_hints["worker_system_disk_size"])
            check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if encryption_provider_key is not None:
            self._values["encryption_provider_key"] = encryption_provider_key
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if node_name_mode is not None:
            self._values["node_name_mode"] = node_name_mode
        if node_pools is not None:
            self._values["node_pools"] = node_pools
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if zone_ids is not None:
            self._values["zone_ids"] = zone_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the cluster.

        The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchIds: The virtual switch ID of the worker node.'''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]]:
        '''Property addons: A combination of addon plugins for Kubernetes clusters.

        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether the cluster automatically renews.

        It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.'''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: cluster payment type.

        The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.

        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.'''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterSpec: The managed cluster spec.

        Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property containerCidr: The container network segment cannot conflict with the VPC network segment.

        When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: Specifies whether to enable deletion protection for the cluster.

        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.

        If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_provider_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).

        This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        '''
        result = self._values.get("encryption_provider_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.

        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.

        Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.

        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.

        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPair: Key pair name.

        Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kubernetesVersion: The version of the Kubernetes cluster.'''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loginPassword: SSH login password.

        Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.

        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_name_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix.

        The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

        - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
        - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        '''
        result = self._values.get("node_name_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_pools(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolsProperty"]]]]:
        '''Property nodePools: The configurations of Node pools.'''
        result = self._values.get("node_pools")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolsProperty"]]]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property numOfNodes: Number of worker nodes.

        The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osType: The type of operating system.

        Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The duration of the annual subscription and monthly subscription.

        It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: When you specify PrePaid, you need to specify the period.

        The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property platform: The release version of the operating system.

        Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property podVswitchIds: The list of pod vSwitches.

        For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.

        The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]]:
        '''Property runtime: The container runtime of the cluster.

        The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.'''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.

        When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property snatEntry: Whether to configure SNAT for the network.

        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property socEnabled: Valid values: true: enables reinforcement based on classified protection.

        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]]:
        '''Property tags: Tag the cluster.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''Property taint: It is used to mark nodes with taints.

        It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeoutMins: Cluster resource stack creation timeout, in minutes.

        The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userData: The user-defined data.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerDataDisk: Whether to mount the data disk.

        The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''Property workerDataDisks: A combination of configurations such as worker data disk type and size.

        This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property workerInstanceTypes: Worker node ECS specification type code.

        For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskCategory: Worker node system disk type.

        The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.

        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property zoneIds: Zone ids of worker node virtual switches belongs to.'''
        result = self._values.get("zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAnyCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosAnyCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::AnyCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAnyClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::AnyCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dab907bea47a6ec3baf52eb289e3caa693abfe5bad7dc9aec81ce23631ca5c9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d2a046b2958edcdcd3551875e5ca4858ee965b86329d81428def39a4e8f8136)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterConfig")
    def cluster_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: clusterConfig: Cluster config.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "clusterConfig"))

    @cluster_config.setter
    def cluster_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0a788fd79a1810e88869e7fdd7f33734c47934365f5666a48f4f742fc36d15f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterConfig", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__757adad7affcc45947b642573f1ab3adfb4721f8cce1396b89206317fdc5a89e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosAnyClusterProps",
    jsii_struct_bases=[],
    name_mapping={"cluster_config": "clusterConfig"},
)
class RosAnyClusterProps:
    def __init__(
        self,
        *,
        cluster_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::AnyCluster``.

        :param cluster_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bd63c860923eb026d4431981eb0b083754bbb0652d39a9d225d6a9b0ce7e15c)
            check_type(argname="argument cluster_config", value=cluster_config, expected_type=type_hints["cluster_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_config": cluster_config,
        }

    @builtins.property
    def cluster_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: clusterConfig: Cluster config.
        '''
        result = self._values.get("cluster_config")
        assert result is not None, "Required property 'cluster_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAnyClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterAddons(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosClusterAddons",
):
    '''A ROS template type:  ``ALIYUN::CS::ClusterAddons``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterAddonsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterAddons``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c196e9a9bb7e29fd3771692b745d228dbfdcaa17ad387ce4608e5dbd961872d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6aa87c0412e1363fda02873407ff51f780b40bddf383b2a771b5f82ce94510af)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterAddons.AddonsProperty"]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterAddons.AddonsProperty"]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterAddons.AddonsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30031fa71b75ddae2d5c8e3e8b8442b1b02ea8c9ef0d2a97adf76f344d96ed74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addons", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc6ab783a3e3904bdb1b2674e008a7308658e06507e5a8aafa198f48843bc6a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3534d2cfc33c80f2354baad6d63d20eab8c74037b939ebc27d75028a749b16b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="installedIgnore")
    def installed_ignore(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
        Default false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "installedIgnore"))

    @installed_ignore.setter
    def installed_ignore(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d30f9ede1c0b035fef80c1621df85aa8fc18a3dce2e56aedb02692989e989bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "installedIgnore", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterAddons.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "version": "version"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__73c915ff23bf683ca90c57fdb97659340c726a16def1bb60b848137b1e41ff15)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Addon plugin name
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: When the value is empty, the latest version is selected by default.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosClusterAddonsProps",
    jsii_struct_bases=[],
    name_mapping={
        "addons": "addons",
        "cluster_id": "clusterId",
        "installed_ignore": "installedIgnore",
    },
)
class RosClusterAddonsProps:
    def __init__(
        self,
        *,
        addons: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterAddons.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        installed_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterAddons``.

        :param addons: 
        :param cluster_id: 
        :param installed_ignore: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e71905304a1f62cfde3534785b8fb57373b257dd535c78f0128c3a90261cf180)
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument installed_ignore", value=installed_ignore, expected_type=type_hints["installed_ignore"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addons": addons,
            "cluster_id": cluster_id,
        }
        if installed_ignore is not None:
            self._values["installed_ignore"] = installed_ignore

    @builtins.property
    def addons(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterAddons.AddonsProperty]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        assert result is not None, "Required property 'addons' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterAddons.AddonsProperty]]], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def installed_ignore(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
        Default false.
        '''
        result = self._values.get("installed_ignore")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterAddonsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterApplication(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosClusterApplication",
):
    '''A ROS template type:  ``ALIYUN::CS::ClusterApplication``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterApplication``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f10e1b4758aeb6edbb5b5510f8a9d0760ff7ad9febc83aef1e6a8b7a0ffcd1e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__921e69b7574e9ec287e18d8e9332f3530cdaa83ed220831210f3304bc3bb58a0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the kubernetes cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__398708490ac47e4ed19c072bb55de06e1ecf0d932a7c90b5946ef1d3889bc785)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__645eeb4fd739d20331ecb33cf69d997cb19ab5581426ef7473aa7162173f4eda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="yamlContent")
    def yaml_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: yamlContent: The yaml content of application.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "yamlContent"))

    @yaml_content.setter
    def yaml_content(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c93c100813daad4739c32d96834ab6f92889d8debd2367a7f0c9489cc7bad06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "yamlContent", value)

    @builtins.property
    @jsii.member(jsii_name="defaultNamespace")
    def default_namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultNamespace: The default namespace for the application, default value is default.
        If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultNamespace"))

    @default_namespace.setter
    def default_namespace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67652a034020861ff17950dd1f62e9b0ad959d5f9fa80091a0c1d3fbd49ae738)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultNamespace", value)

    @builtins.property
    @jsii.member(jsii_name="defaultNamespaceDeletion")
    def default_namespace_deletion(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultNamespaceDeletion"))

    @default_namespace_deletion.setter
    def default_namespace_deletion(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37a3afd3ec90f55665183df627deea7a0f884bb809b9ca0b01069a01d4ed5e3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultNamespaceDeletion", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosClusterApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "yaml_content": "yamlContent",
        "default_namespace": "defaultNamespace",
        "default_namespace_deletion": "defaultNamespaceDeletion",
    },
)
class RosClusterApplicationProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        yaml_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        default_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_namespace_deletion: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterApplication``.

        :param cluster_id: 
        :param yaml_content: 
        :param default_namespace: 
        :param default_namespace_deletion: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c82b4c70a819d49225a45b77f22e192bf65eb6c3fef95a2a3550815719e827d6)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument yaml_content", value=yaml_content, expected_type=type_hints["yaml_content"])
            check_type(argname="argument default_namespace", value=default_namespace, expected_type=type_hints["default_namespace"])
            check_type(argname="argument default_namespace_deletion", value=default_namespace_deletion, expected_type=type_hints["default_namespace_deletion"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "yaml_content": yaml_content,
        }
        if default_namespace is not None:
            self._values["default_namespace"] = default_namespace
        if default_namespace_deletion is not None:
            self._values["default_namespace_deletion"] = default_namespace_deletion

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the kubernetes cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def yaml_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: yamlContent: The yaml content of application.
        '''
        result = self._values.get("yaml_content")
        assert result is not None, "Required property 'yaml_content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def default_namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        defaultNamespace: The default namespace for the application, default value is default.
        If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        '''
        result = self._values.get("default_namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_namespace_deletion(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
        '''
        result = self._values.get("default_namespace_deletion")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterHelmApplication(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosClusterHelmApplication",
):
    '''A ROS template type:  ``ALIYUN::CS::ClusterHelmApplication``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterHelmApplicationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterHelmApplication``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ae2fb0e664c2762063eda49634af1a4c209ac3038af9e6033801f14fcda1af9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c3f22975bb945e0e8feec0432b398ad0b689e4c623c657f787e11a562bf7a47)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chartUrl")
    def chart_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chartUrl: The URL of chart. Supports HTTP or HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chartUrl"))

    @chart_url.setter
    def chart_url(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e58d99024ffdb3a0c34f9f241bf2be88506da14cec0137292a5fa5ace562731)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chartUrl", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the kubernetes cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11f7a2f39efb48eb2cf585dd957782798c0a9fe912181983e1bbdcecb66534e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdfef686b265cc21bf774d2c634b476e20a171716f9c4dc93d890dbf99df4e34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name for helm release.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4734ba1fa926beb63a0432efd860a8e1f2e2ee10e03d230d4e6f8d0455088bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="chartValues")
    def chart_values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: chartValues: Chart custom values.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "chartValues"))

    @chart_values.setter
    def chart_values(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02bda6f5d73348d423f1bc997b28acea0f672edcc0cae4f634191a633ec9a186)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chartValues", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: Namespace to use with helm. Default is default
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18f7ff2bc71c763ae468698b2dda901c7c791883ea4beab4eead60c3676d98ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosClusterHelmApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "chart_url": "chartUrl",
        "cluster_id": "clusterId",
        "name": "name",
        "chart_values": "chartValues",
        "namespace": "namespace",
    },
)
class RosClusterHelmApplicationProps:
    def __init__(
        self,
        *,
        chart_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        chart_values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterHelmApplication``.

        :param chart_url: 
        :param cluster_id: 
        :param name: 
        :param chart_values: 
        :param namespace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bddbc4b64cb63cd7b0fa6c60c81fcd403633475d0d675512964417160745be7e)
            check_type(argname="argument chart_url", value=chart_url, expected_type=type_hints["chart_url"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument chart_values", value=chart_values, expected_type=type_hints["chart_values"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "chart_url": chart_url,
            "cluster_id": cluster_id,
            "name": name,
        }
        if chart_values is not None:
            self._values["chart_values"] = chart_values
        if namespace is not None:
            self._values["namespace"] = namespace

    @builtins.property
    def chart_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: chartUrl: The URL of chart. Supports HTTP or HTTPS.
        '''
        result = self._values.get("chart_url")
        assert result is not None, "Required property 'chart_url' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: The ID of the kubernetes cluster.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name for helm release.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def chart_values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: chartValues: Chart custom values.
        '''
        result = self._values.get("chart_values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: Namespace to use with helm. Default is default
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterHelmApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosClusterNodePool(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool",
):
    '''A ROS template type:  ``ALIYUN::CS::ClusterNodePool``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterNodePoolProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ClusterNodePool``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ca24c50cc7fd4f89982a27ed196938c5766b14d0b113383bd87166e6e26966a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08e51cb9deed25e84d4f14a9cd7a200743cdf17b8ffd67d667946cdf950495df)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNodePoolId")
    def attr_node_pool_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodePoolId: Cluster node pool ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodePoolId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d85cdf50d60c737695d01fbdf3eca02609428448fd4bc8287b671bbfbafe5d80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f96127a99e566a5fa9a977ab820214a9544a1e7379c107002a80eb348c9fa1f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroup")
    def scaling_group(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ScalingGroupProperty"]:
        '''
        :Property: scalingGroup: The configurations of the scaling group used by the node pool.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ScalingGroupProperty"], jsii.get(self, "scalingGroup"))

    @scaling_group.setter
    def scaling_group(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ScalingGroupProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88cefc77691983e1e50c2af8d8cf5bfcf040903aa48b5cf6b19afb5bd154f4d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroup", value)

    @builtins.property
    @jsii.member(jsii_name="autoScaling")
    def auto_scaling(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.AutoScalingProperty"]]:
        '''
        :Property: autoScaling: The configurations of auto scaling.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.AutoScalingProperty"]], jsii.get(self, "autoScaling"))

    @auto_scaling.setter
    def auto_scaling(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.AutoScalingProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f6b4ae625291255410ccfc16c47490ae91fffd37cc79f0dad96853ed01d6e23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoScaling", value)

    @builtins.property
    @jsii.member(jsii_name="count")
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: count: The number of nodes in the node pool.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "count"))

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__808413693691c67ad74e570d45e7c373ecf0a93804a4e07b49e1350f0b150ff6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "count", value)

    @builtins.property
    @jsii.member(jsii_name="kubernetesConfig")
    def kubernetes_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]]:
        '''
        :Property: kubernetesConfig: The configurations of the ACK cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]], jsii.get(self, "kubernetesConfig"))

    @kubernetes_config.setter
    def kubernetes_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.KubernetesConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7135c9883d4f42018506d40d18eb052747b5cb34458fc53760abc49a5c20ddeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kubernetesConfig", value)

    @builtins.property
    @jsii.member(jsii_name="management")
    def management(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ManagementProperty"]]:
        '''
        :Property: management: The configurations of the managed node pool.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ManagementProperty"]], jsii.get(self, "management"))

    @management.setter
    def management(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.ManagementProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5896bcfaf917431f105306b7d77572d6d8a4dd293ff7d2598973a79245a2b908)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "management", value)

    @builtins.property
    @jsii.member(jsii_name="nodePoolInfo")
    def node_pool_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]]:
        '''
        :Property: nodePoolInfo: The configurations of the node pool.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]], jsii.get(self, "nodePoolInfo"))

    @node_pool_info.setter
    def node_pool_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.NodePoolInfoProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__516647734faded52d7ca05e0bd10b848cdf65347cba7ee7f7c8267b183c4b96c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodePoolInfo", value)

    @builtins.property
    @jsii.member(jsii_name="teeConfig")
    def tee_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TeeConfigProperty"]]:
        '''
        :Property: teeConfig: The configurations of confidential computing.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TeeConfigProperty"]], jsii.get(self, "teeConfig"))

    @tee_config.setter
    def tee_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TeeConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42c9e6874930661a8b42bb866c5e65b063ca694597734d7ed31414802203bf4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "teeConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "eip_bandwidth": "eipBandwidth",
            "eip_internet_charge_type": "eipInternetChargeType",
            "is_bond_eip": "isBondEip",
            "max_instances": "maxInstances",
            "min_instances": "minInstances",
            "type": "type",
        },
    )
    class AutoScalingProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            eip_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            eip_internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_bond_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_instances: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_instances: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable: 
            :param eip_bandwidth: 
            :param eip_internet_charge_type: 
            :param is_bond_eip: 
            :param max_instances: 
            :param min_instances: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c59e32bffc02ef2148365bf4be738901a5ec1a809ffcb1794ddbf27118f77e5a)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument eip_bandwidth", value=eip_bandwidth, expected_type=type_hints["eip_bandwidth"])
                check_type(argname="argument eip_internet_charge_type", value=eip_internet_charge_type, expected_type=type_hints["eip_internet_charge_type"])
                check_type(argname="argument is_bond_eip", value=is_bond_eip, expected_type=type_hints["is_bond_eip"])
                check_type(argname="argument max_instances", value=max_instances, expected_type=type_hints["max_instances"])
                check_type(argname="argument min_instances", value=min_instances, expected_type=type_hints["min_instances"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enable": enable,
            }
            if eip_bandwidth is not None:
                self._values["eip_bandwidth"] = eip_bandwidth
            if eip_internet_charge_type is not None:
                self._values["eip_internet_charge_type"] = eip_internet_charge_type
            if is_bond_eip is not None:
                self._values["is_bond_eip"] = is_bond_eip
            if max_instances is not None:
                self._values["max_instances"] = max_instances
            if min_instances is not None:
                self._values["min_instances"] = min_instances
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def enable(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            enable: Specifies whether to enable auto scaling. Valid values:
            true: enables auto scaling.
            false: disables auto scaling.
            If you set this parameter to false, other parameters in the auto_scaling section do not take effect.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def eip_bandwidth(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: eipBandwidth: The peak bandwidth of the EIP. Unit: Mbps
            '''
            result = self._values.get("eip_bandwidth")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def eip_internet_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            eipInternetChargeType: The billing method of the EIP. Valid values:
            PayByBandwidth: pay-by-bandwidth.
            PayByTraffic: pay-by-data-transfer.
            Default value: PayByBandwidth.
            '''
            result = self._values.get("eip_internet_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_bond_eip(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isBondEip: Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:
            true: associates an EIP with the node pool.
            false: does not associate an EIP with the node pool.
            Default value: false.
            '''
            result = self._values.get("is_bond_eip")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_instances(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxInstances: The maximum number of Elastic Compute Service (ECS) instances in the scaling group.
            '''
            result = self._values.get("max_instances")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_instances(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: minInstances: The minimum number of Elastic Compute Service (ECS) instances in the scaling group.
            '''
            result = self._values.get("min_instances")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: The instance types that can be used for the auto scaling of the node pool. Valid values:
            cpu: regular instance.
            gpu: GPU-accelerated instance.
            gpushare: shared GPU-accelerated instance.
            spot: preemptible instance.
            Default value: cpu.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AutoScalingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_snapshot_policy_id": "autoSnapshotPolicyId",
            "category": "category",
            "encrypted": "encrypted",
            "performance_level": "performanceLevel",
            "size": "size",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_snapshot_policy_id: 
            :param category: 
            :param encrypted: 
            :param performance_level: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d8ec4890917e0971dc00a27f4fc38ae7d540b339f33700ca07ee9b639479c4e8)
                check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if auto_snapshot_policy_id is not None:
                self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
            if category is not None:
                self._values["category"] = category
            if encrypted is not None:
                self._values["encrypted"] = encrypted
            if performance_level is not None:
                self._values["performance_level"] = performance_level
            if size is not None:
                self._values["size"] = size

        @builtins.property
        def auto_snapshot_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
            By default, this parameter is empty. This indicates that automatic backup is disabled.
            '''
            result = self._values.get("auto_snapshot_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud: basic disk.
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            encrypted: Specifies whether to encrypt a data disk. Valid values:
            true: encrypts a data disk.
            false: does not encrypt a data disk.
            Default value: false.
            '''
            result = self._values.get("encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            size: The size of a data disk. The size is measured in GiB.
            Valid values: 40 to 32768.
            '''
            result = self._values.get("size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "runtime": "runtime",
            "runtime_version": "runtimeVersion",
            "cms_enabled": "cmsEnabled",
            "cpu_policy": "cpuPolicy",
            "labels": "labels",
            "node_name_mode": "nodeNameMode",
            "taints": "taints",
            "unschedulable": "unschedulable",
            "user_data": "userData",
        },
    )
    class KubernetesConfigProperty:
        def __init__(
            self,
            *,
            runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            runtime_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cms_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            taints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.TaintsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            unschedulable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param runtime: 
            :param runtime_version: 
            :param cms_enabled: 
            :param cpu_policy: 
            :param labels: 
            :param node_name_mode: 
            :param taints: 
            :param unschedulable: 
            :param user_data: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e4be0c709b7ed0877e7f1383b82eefd218d59d305e16d29162b3d05941a69716)
                check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
                check_type(argname="argument runtime_version", value=runtime_version, expected_type=type_hints["runtime_version"])
                check_type(argname="argument cms_enabled", value=cms_enabled, expected_type=type_hints["cms_enabled"])
                check_type(argname="argument cpu_policy", value=cpu_policy, expected_type=type_hints["cpu_policy"])
                check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
                check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
                check_type(argname="argument taints", value=taints, expected_type=type_hints["taints"])
                check_type(argname="argument unschedulable", value=unschedulable, expected_type=type_hints["unschedulable"])
                check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "runtime": runtime,
                "runtime_version": runtime_version,
            }
            if cms_enabled is not None:
                self._values["cms_enabled"] = cms_enabled
            if cpu_policy is not None:
                self._values["cpu_policy"] = cpu_policy
            if labels is not None:
                self._values["labels"] = labels
            if node_name_mode is not None:
                self._values["node_name_mode"] = node_name_mode
            if taints is not None:
                self._values["taints"] = taints
            if unschedulable is not None:
                self._values["unschedulable"] = unschedulable
            if user_data is not None:
                self._values["user_data"] = user_data

        @builtins.property
        def runtime(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: runtime: The name of the container runtime.
            '''
            result = self._values.get("runtime")
            assert result is not None, "Required property 'runtime' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def runtime_version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: runtimeVersion: The version of the container runtime.
            '''
            result = self._values.get("runtime_version")
            assert result is not None, "Required property 'runtime_version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cms_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cmsEnabled: Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:
            true: installs the CloudMonitor agent on ECS nodes.
            false: does not install the CloudMonitor agent on ECS nodes.
            Default value: false.
            '''
            result = self._values.get("cms_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cpu_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
            static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
            none: This policy indicates that the default CPU affinity is used.
            Default value: none.
            '''
            result = self._values.get("cpu_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.LabelsProperty"]]]]:
            '''
            :Property: labels: You can add labels to nodes that are added to the cluster.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.LabelsProperty"]]]], result)

        @builtins.property
        def node_name_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

            - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
            - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
            '''
            result = self._values.get("node_name_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def taints(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TaintsProperty"]]]]:
            '''
            :Property: taints: The taints of the nodes.
            '''
            result = self._values.get("taints")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.TaintsProperty"]]]], result)

        @builtins.property
        def unschedulable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: unschedulable: Set new nodes to unschedulable. If true, newly added nodes become unschedulable after they are registered to the cluster. You can enable scheduling for the nodes on the Nodes page in the console.
            '''
            result = self._values.get("unschedulable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_data(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userData: The user-defined data.
            '''
            result = self._values.get("user_data")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KubernetesConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__da2682595e5971eedcc15fa084f15d65d19bf50e18f414da7673251c96248255)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "auto_repair": "autoRepair",
            "upgrade_config": "upgradeConfig",
        },
    )
    class ManagementProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            auto_repair: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            upgrade_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.UpgradeConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param enable: 
            :param auto_repair: 
            :param upgrade_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5d297be281daaba8869528b393efe9c01c4b6e57f63cb84d3e705392c82b29f1)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument auto_repair", value=auto_repair, expected_type=type_hints["auto_repair"])
                check_type(argname="argument upgrade_config", value=upgrade_config, expected_type=type_hints["upgrade_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enable": enable,
            }
            if auto_repair is not None:
                self._values["auto_repair"] = auto_repair
            if upgrade_config is not None:
                self._values["upgrade_config"] = upgrade_config

        @builtins.property
        def enable(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            enable: Specifies whether to enable managed node pools. Valid values:
            true: enables managed node pools.
            false: disables managed node pools. The other parameters in this section take effect only when Enable=true is specified.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auto_repair(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRepair: Specifies whether to enable auto repairing. This parameter takes effect only when Enable=true is specified.
            true: enables auto repairing.
            false: disables auto repairing.
            '''
            result = self._values.get("auto_repair")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def upgrade_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.UpgradeConfigProperty"]]:
            '''
            :Property: upgradeConfig: The configurations of auto upgrading. The configurations take effect only when Enable=true is specified.
            '''
            result = self._values.get("upgrade_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.UpgradeConfigProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ManagementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "resource_group_id": "resourceGroupId"},
    )
    class NodePoolInfoProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param resource_group_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e6a2ccd1ab80c199b421cf0fba633bd53cc095ed6c602e9b4e0c869c5d2a31c4)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if resource_group_id is not None:
                self._values["resource_group_id"] = resource_group_id

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the node pool.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resourceGroupId: The ID of the resource group to which the node pool belongs.
            '''
            result = self._values.get("resource_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodePoolInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_types": "instanceTypes",
            "system_disk_size": "systemDiskSize",
            "v_switch_ids": "vSwitchIds",
            "auto_renew": "autoRenew",
            "auto_renew_period": "autoRenewPeriod",
            "compensate_with_on_demand": "compensateWithOnDemand",
            "data_disks": "dataDisks",
            "image_id": "imageId",
            "instance_charge_type": "instanceChargeType",
            "internet_charge_type": "internetChargeType",
            "internet_max_bandwidth_out": "internetMaxBandwidthOut",
            "key_pair": "keyPair",
            "login_password": "loginPassword",
            "multi_az_policy": "multiAzPolicy",
            "on_demand_base_capacity": "onDemandBaseCapacity",
            "on_demand_percentage_above_base_capacity": "onDemandPercentageAboveBaseCapacity",
            "period": "period",
            "period_unit": "periodUnit",
            "platform": "platform",
            "rds_instances": "rdsInstances",
            "scaling_policy": "scalingPolicy",
            "security_group_id": "securityGroupId",
            "spot_instance_pools": "spotInstancePools",
            "spot_instance_remedy": "spotInstanceRemedy",
            "spot_price_limit": "spotPriceLimit",
            "spot_strategy": "spotStrategy",
            "system_disk_category": "systemDiskCategory",
            "system_disk_performance_level": "systemDiskPerformanceLevel",
            "tags": "tags",
            "zone_ids": "zoneIds",
        },
    )
    class ScalingGroupProperty:
        def __init__(
            self,
            *,
            instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            multi_az_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_instances: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            scaling_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_instance_pools: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            spot_price_limit: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosClusterNodePool.SpotPriceLimitProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tags: typing.Optional[typing.Sequence[typing.Union["RosClusterNodePool.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param instance_types: 
            :param system_disk_size: 
            :param v_switch_ids: 
            :param auto_renew: 
            :param auto_renew_period: 
            :param compensate_with_on_demand: 
            :param data_disks: 
            :param image_id: 
            :param instance_charge_type: 
            :param internet_charge_type: 
            :param internet_max_bandwidth_out: 
            :param key_pair: 
            :param login_password: 
            :param multi_az_policy: 
            :param on_demand_base_capacity: 
            :param on_demand_percentage_above_base_capacity: 
            :param period: 
            :param period_unit: 
            :param platform: 
            :param rds_instances: 
            :param scaling_policy: 
            :param security_group_id: 
            :param spot_instance_pools: 
            :param spot_instance_remedy: 
            :param spot_price_limit: 
            :param spot_strategy: 
            :param system_disk_category: 
            :param system_disk_performance_level: 
            :param tags: 
            :param zone_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a20fc45a77d5665db88eb31dbe489d41b2df733ca8327505e041dd3465ff18bb)
                check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
                check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
                check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
                check_type(argname="argument compensate_with_on_demand", value=compensate_with_on_demand, expected_type=type_hints["compensate_with_on_demand"])
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
                check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
                check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
                check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
                check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
                check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
                check_type(argname="argument multi_az_policy", value=multi_az_policy, expected_type=type_hints["multi_az_policy"])
                check_type(argname="argument on_demand_base_capacity", value=on_demand_base_capacity, expected_type=type_hints["on_demand_base_capacity"])
                check_type(argname="argument on_demand_percentage_above_base_capacity", value=on_demand_percentage_above_base_capacity, expected_type=type_hints["on_demand_percentage_above_base_capacity"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
                check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
                check_type(argname="argument rds_instances", value=rds_instances, expected_type=type_hints["rds_instances"])
                check_type(argname="argument scaling_policy", value=scaling_policy, expected_type=type_hints["scaling_policy"])
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument spot_instance_pools", value=spot_instance_pools, expected_type=type_hints["spot_instance_pools"])
                check_type(argname="argument spot_instance_remedy", value=spot_instance_remedy, expected_type=type_hints["spot_instance_remedy"])
                check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
                check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
                check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
                check_type(argname="argument system_disk_performance_level", value=system_disk_performance_level, expected_type=type_hints["system_disk_performance_level"])
                check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
                check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_types": instance_types,
                "system_disk_size": system_disk_size,
                "v_switch_ids": v_switch_ids,
            }
            if auto_renew is not None:
                self._values["auto_renew"] = auto_renew
            if auto_renew_period is not None:
                self._values["auto_renew_period"] = auto_renew_period
            if compensate_with_on_demand is not None:
                self._values["compensate_with_on_demand"] = compensate_with_on_demand
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if image_id is not None:
                self._values["image_id"] = image_id
            if instance_charge_type is not None:
                self._values["instance_charge_type"] = instance_charge_type
            if internet_charge_type is not None:
                self._values["internet_charge_type"] = internet_charge_type
            if internet_max_bandwidth_out is not None:
                self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
            if key_pair is not None:
                self._values["key_pair"] = key_pair
            if login_password is not None:
                self._values["login_password"] = login_password
            if multi_az_policy is not None:
                self._values["multi_az_policy"] = multi_az_policy
            if on_demand_base_capacity is not None:
                self._values["on_demand_base_capacity"] = on_demand_base_capacity
            if on_demand_percentage_above_base_capacity is not None:
                self._values["on_demand_percentage_above_base_capacity"] = on_demand_percentage_above_base_capacity
            if period is not None:
                self._values["period"] = period
            if period_unit is not None:
                self._values["period_unit"] = period_unit
            if platform is not None:
                self._values["platform"] = platform
            if rds_instances is not None:
                self._values["rds_instances"] = rds_instances
            if scaling_policy is not None:
                self._values["scaling_policy"] = scaling_policy
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if spot_instance_pools is not None:
                self._values["spot_instance_pools"] = spot_instance_pools
            if spot_instance_remedy is not None:
                self._values["spot_instance_remedy"] = spot_instance_remedy
            if spot_price_limit is not None:
                self._values["spot_price_limit"] = spot_price_limit
            if spot_strategy is not None:
                self._values["spot_strategy"] = spot_strategy
            if system_disk_category is not None:
                self._values["system_disk_category"] = system_disk_category
            if system_disk_performance_level is not None:
                self._values["system_disk_performance_level"] = system_disk_performance_level
            if tags is not None:
                self._values["tags"] = tags
            if zone_ids is not None:
                self._values["zone_ids"] = zone_ids

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: instanceTypes: The ECS instance types of the nodes.
            '''
            result = self._values.get("instance_types")
            assert result is not None, "Required property 'instance_types' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def system_disk_size(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
            '''
            result = self._values.get("system_disk_size")
            assert result is not None, "Required property 'system_disk_size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: vSwitchIds: The IDs of vSwitches.
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def auto_renew(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRenew: Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when instance_charge_type is set to PrePaid. Valid values:
            true: enables auto-renewal.
            false: disables auto-renewal.
            Default value: true.
            '''
            result = self._values.get("auto_renew")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def auto_renew_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoRenewPeriod: The auto-renewal period for nodes in the node pool. This parameter takes effect and is required only when instance_charge_type is set to PrePaid and auto_renew is set to true. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            Default value: 1
            '''
            result = self._values.get("auto_renew_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def compensate_with_on_demand(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect when multi_az_policy is set to COST_OPTIMIZED. Valid values:
            true: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            false: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
            '''
            result = self._values.get("compensate_with_on_demand")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: The configurations of data disks.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.DataDisksProperty"]]]], result)

        @builtins.property
        def image_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: imageId: The ID of a custom image. By default, the image provided by ACK is used.
            '''
            result = self._values.get("image_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceChargeType: The billing method of nodes in the node pool. Valid values:
            PrePaid: subscription.
            PostPaid: pay-as-you-go.
            Default value: PostPaid.
            '''
            result = self._values.get("instance_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def internet_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
            '''
            result = self._values.get("internet_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def internet_max_bandwidth_out(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            internetMaxBandwidthOut: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("internet_max_bandwidth_out")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key_pair(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
            '''
            result = self._values.get("key_pair")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def login_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            '''
            result = self._values.get("login_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def multi_az_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            multiAzPolicy: The scaling policy of ECS instances in a multi-zone scaling group. Valid values:
            PRIORITY: the scaling group is scaled based on the VSwitchIds.N parameter. When ECS instances cannot be created in the zone where the vSwitch with the highest priority is deployed, the system attempts to create ECS instances in the zone where the vSwitch with the next highest priority is deployed.
            COST_OPTIMIZED: ECS instances are created based on the unit price of vCPUs in ascending order. Preemptible instances are preferably created when multiple instance types are specified in the scaling configurations. You can set the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
            BALANCE: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances are not evenly distributed across multiple zones due to insufficient inventory, you can call the RebalanceInstances operation to balance the instance distribution among zones.
            Default value: PRIORITY.
            '''
            result = self._values.get("multi_az_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def on_demand_base_capacity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: onDemandBaseCapacity: The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances is lower than this value, pay-as-you-go instances are preferably created to meet the required number.
            '''
            result = self._values.get("on_demand_base_capacity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def on_demand_percentage_above_base_capacity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by on_demand_base_capacity. Valid values: 0 to 100.
            '''
            result = self._values.get("on_demand_percentage_above_base_capacity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            Default value: 1.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
            '''
            result = self._values.get("period_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def platform(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            platform: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("platform")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_instances(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: rdsInstances: The IDs of the ApsaraDB RDS instances.
            '''
            result = self._values.get("rds_instances")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def scaling_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            scalingPolicy: The scaling mode of the scaling group. Valid values:
            release: the standard mode. ECS instances are created and released based on the resource usage.
            recycle: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.
            Default value:release.
            '''
            result = self._values.get("scaling_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: The ID of the security group to which the nodes belong.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_instance_pools(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: spotInstancePools: The number of available instance types. The scaling group creates preemptible instances of multiple instance types at the lowest cost. Valid values: 1 to 10.
            '''
            result = self._values.get("spot_instance_pools")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_instance_remedy(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:
            true: supplements preemptible instances.
            false: does not supplement preemptible instances.
            '''
            result = self._values.get("spot_instance_remedy")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def spot_price_limit(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.SpotPriceLimitProperty"]]]]:
            '''
            :Property: spotPriceLimit: The instance type for preemptible instances and the price limit of the instance type.
            '''
            result = self._values.get("spot_price_limit")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosClusterNodePool.SpotPriceLimitProperty"]]]], result)

        @builtins.property
        def spot_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            spotStrategy: The type of preemptible instance. Valid values:
            NoSpot: non-preemptible instance.
            SpotWithPriceLimit: specifies the highest bid for a preemptible instance.
            SpotAsPriceGo: automatically submits bids based on the up-to-date market price.
            '''
            result = self._values.get("spot_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskCategory: The type of system disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("system_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("system_disk_performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tags(
            self,
        ) -> typing.Optional[typing.List["RosClusterNodePool.TagsProperty"]]:
            '''
            :Property:

            tags: Adds labels only to ECS instances.
            A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosClusterNodePool.TagsProperty"]], result)

        @builtins.property
        def zone_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: zoneIds: Zone ids of virtual switches belongs to.
            '''
            result = self._values.get("zone_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScalingGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty",
        jsii_struct_bases=[],
        name_mapping={"instance_type": "instanceType", "price_limit": "priceLimit"},
    )
    class SpotPriceLimitProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            price_limit: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param instance_type: 
            :param price_limit: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b96194e014d63ed5bc9a2534c9932f444cf31db4220d2fe04f86e7546b0276e9)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument price_limit", value=price_limit, expected_type=type_hints["price_limit"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
                "price_limit": price_limit,
            }

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceType: The instance type for preemptible instances.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def price_limit(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: priceLimit: The price limit of a preemptible instance.
            '''
            result = self._values.get("price_limit")
            assert result is not None, "Required property 'price_limit' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SpotPriceLimitProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__212808b3c07cdd8430bf9fc683f605246f49e9155ce226f12686ea7702d2d775)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value", "effect": "effect"},
    )
    class TaintsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            :param effect: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d4f368270a6db3c1eb058699e6c1d9fb5421e7385365bf0195da28285d6143d4)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }
            if effect is not None:
                self._values["effect"] = effect

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            effect: The scheduling policy. Valid values:
            NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
            NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
            PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
            Default value: NoSchedule.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TaintsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"tee_enable": "teeEnable"},
    )
    class TeeConfigProperty:
        def __init__(
            self,
            *,
            tee_enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param tee_enable: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a00a0ac8e0314c17350cff410fcac5316e458cb5efac24d241c185a9073ff5d4)
                check_type(argname="argument tee_enable", value=tee_enable, expected_type=type_hints["tee_enable"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "tee_enable": tee_enable,
            }

        @builtins.property
        def tee_enable(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: teeEnable: Specifies whether to enable confidential computing for the cluster.
            '''
            result = self._values.get("tee_enable")
            assert result is not None, "Required property 'tee_enable' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TeeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_upgrade": "autoUpgrade",
            "max_unavailable": "maxUnavailable",
            "surge": "surge",
            "surge_percentage": "surgePercentage",
        },
    )
    class UpgradeConfigProperty:
        def __init__(
            self,
            *,
            auto_upgrade: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_unavailable: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            surge: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            surge_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_upgrade: 
            :param max_unavailable: 
            :param surge: 
            :param surge_percentage: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__64032cec75b5244006c19ce93975c32f2d3fb851ab1e189ade69c63542f1849b)
                check_type(argname="argument auto_upgrade", value=auto_upgrade, expected_type=type_hints["auto_upgrade"])
                check_type(argname="argument max_unavailable", value=max_unavailable, expected_type=type_hints["max_unavailable"])
                check_type(argname="argument surge", value=surge, expected_type=type_hints["surge"])
                check_type(argname="argument surge_percentage", value=surge_percentage, expected_type=type_hints["surge_percentage"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if auto_upgrade is not None:
                self._values["auto_upgrade"] = auto_upgrade
            if max_unavailable is not None:
                self._values["max_unavailable"] = max_unavailable
            if surge is not None:
                self._values["surge"] = surge
            if surge_percentage is not None:
                self._values["surge_percentage"] = surge_percentage

        @builtins.property
        def auto_upgrade(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoUpgrade: Specifies whether to enable auto upgrading. Valid values:
            true: enables auto upgrading.
            false: disables auto upgrading.
            '''
            result = self._values.get("auto_upgrade")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_unavailable(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            maxUnavailable: The maximum number of nodes that can be in the unschedulable state.
            Valid values: 1 to 1000.
            Default value: 1.
            '''
            result = self._values.get("max_unavailable")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def surge(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: surge: The number of extra nodes that can be added to the node pool during an auto upgrade.
            '''
            result = self._values.get("surge")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def surge_percentage(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: surgePercentage: The ratio of extra nodes to the nodes in the node pool. You must set this parameter or Surge.
            '''
            result = self._values.get("surge_percentage")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UpgradeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosClusterNodePoolProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "scaling_group": "scalingGroup",
        "auto_scaling": "autoScaling",
        "count": "count",
        "kubernetes_config": "kubernetesConfig",
        "management": "management",
        "node_pool_info": "nodePoolInfo",
        "tee_config": "teeConfig",
    },
)
class RosClusterNodePoolProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.ScalingGroupProperty, typing.Dict[builtins.str, typing.Any]]],
        auto_scaling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.AutoScalingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.KubernetesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        management: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.ManagementProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.NodePoolInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tee_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.TeeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ClusterNodePool``.

        :param cluster_id: 
        :param scaling_group: 
        :param auto_scaling: 
        :param count: 
        :param kubernetes_config: 
        :param management: 
        :param node_pool_info: 
        :param tee_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93680a9c82a6fb91f61e68468734dd320625b47f84fb8452770ad5f7149a5c9c)
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument scaling_group", value=scaling_group, expected_type=type_hints["scaling_group"])
            check_type(argname="argument auto_scaling", value=auto_scaling, expected_type=type_hints["auto_scaling"])
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
            check_type(argname="argument kubernetes_config", value=kubernetes_config, expected_type=type_hints["kubernetes_config"])
            check_type(argname="argument management", value=management, expected_type=type_hints["management"])
            check_type(argname="argument node_pool_info", value=node_pool_info, expected_type=type_hints["node_pool_info"])
            check_type(argname="argument tee_config", value=tee_config, expected_type=type_hints["tee_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_id": cluster_id,
            "scaling_group": scaling_group,
        }
        if auto_scaling is not None:
            self._values["auto_scaling"] = auto_scaling
        if count is not None:
            self._values["count"] = count
        if kubernetes_config is not None:
            self._values["kubernetes_config"] = kubernetes_config
        if management is not None:
            self._values["management"] = management
        if node_pool_info is not None:
            self._values["node_pool_info"] = node_pool_info
        if tee_config is not None:
            self._values["tee_config"] = tee_config

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterId: Cluster ID.
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def scaling_group(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.ScalingGroupProperty]:
        '''
        :Property: scalingGroup: The configurations of the scaling group used by the node pool.
        '''
        result = self._values.get("scaling_group")
        assert result is not None, "Required property 'scaling_group' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.ScalingGroupProperty], result)

    @builtins.property
    def auto_scaling(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.AutoScalingProperty]]:
        '''
        :Property: autoScaling: The configurations of auto scaling.
        '''
        result = self._values.get("auto_scaling")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.AutoScalingProperty]], result)

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: count: The number of nodes in the node pool.
        '''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.KubernetesConfigProperty]]:
        '''
        :Property: kubernetesConfig: The configurations of the ACK cluster.
        '''
        result = self._values.get("kubernetes_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.KubernetesConfigProperty]], result)

    @builtins.property
    def management(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.ManagementProperty]]:
        '''
        :Property: management: The configurations of the managed node pool.
        '''
        result = self._values.get("management")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.ManagementProperty]], result)

    @builtins.property
    def node_pool_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.NodePoolInfoProperty]]:
        '''
        :Property: nodePoolInfo: The configurations of the node pool.
        '''
        result = self._values.get("node_pool_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.NodePoolInfoProperty]], result)

    @builtins.property
    def tee_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.TeeConfigProperty]]:
        '''
        :Property: teeConfig: The configurations of confidential computing.
        '''
        result = self._values.get("tee_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.TeeConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterNodePoolProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKubernetesCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::KubernetesCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::KubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b6114c13f9f770b15eee9d0b58a68987fcc5ba60bb23224bddcc201e65cbeb3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__548ecf25b1fc6c4ea591a50431fbdab2fef443eb1daf6b31c5efea4da4369e16)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d3ab1980980e08e64673d2aef73c49313faa82b33410bf1e251fd5aea777d90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="masterInstanceTypes")
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "masterInstanceTypes"))

    @master_instance_types.setter
    def master_instance_types(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd1f203396b1a633a4ccb51e4b0e549395aa7fba3ef15c9bf3e712951a2b09f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterInstanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="masterVSwitchIds")
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "masterVSwitchIds"))

    @master_v_switch_ids.setter
    def master_v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32f4d5751a8080f9a8a0280e140e05e191a3a50f2ac5acd0f01c8240b1071ec3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterVSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__591e358e0200c518f1d714ec2749f1de27b6adb233ccc564e3ed4221b9343dd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27cdf9f8d0e0976a081d59b5e7f6ae6b7dd0b27dee08824038de61091cf09b31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="workerVSwitchIds")
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workerVSwitchIds"))

    @worker_v_switch_ids.setter
    def worker_v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0094153dff8097adbe5f33a639fa208771012876670483c56f5cd2537c7424cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerVSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feadaf31a8f989adeed466742f9760e712f5cda477e9b99a342b38f516f9e8c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addons", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67b8e6c6137f013165dc62d830b7c921a467fdb9185277d8cf78fd722fb1311f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf98face9e07e3bf91b148f2cc9cc3e192eaf5928b38fb3a8230c14c7615b95d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86cde05c1dcdd80f30fbef4764f1385a91e4e31da1b3d0163f9ee79b98704012)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="cisEnabled")
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cisEnabled"))

    @cis_enabled.setter
    def cis_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a3bed9d47fe85141de945bf42a0423a72dee994e640ea97df7bcc39b0dbf31f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cisEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cloudMonitorFlags"))

    @cloud_monitor_flags.setter
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b25730ea2d9c11ca79ec2ddc73d588552823b52e122bbb978ec89a28d056039f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerCidr"))

    @container_cidr.setter
    def container_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb4972ce1bca8db2981d4127c6bf954b16eed359a08318a9a8f0374f1452a92a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerCidr", value)

    @builtins.property
    @jsii.member(jsii_name="cpuPolicy")
    def cpu_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cpuPolicy"))

    @cpu_policy.setter
    def cpu_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85f438f7b8d867e354c728516fae5773abeb57894dfa6b4478586441cae760b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpuPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3bdbf2882d7238612745ac9d62f61559ae34bf2f44b1c9a348a30d3c5325ee2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disableRollback"))

    @disable_rollback.setter
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff1479c359dfdf65007258c4818cb4b73c1231a70eac5e1cb30ac6e8a7b5fae8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disableRollback", value)

    @builtins.property
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d73bba4507b51d66fae9d3f115e3a1719f3a94f88de57b753250fc3aa426703)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property
    @jsii.member(jsii_name="formatDisk")
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "formatDisk"))

    @format_disk.setter
    def format_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0801e9fc9816c1babcffbb14274acfce3b732381002073cd7f6c020a211c530d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "formatDisk", value)

    @builtins.property
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8494d0d17c59655fdd61d7882ed9755eed8e4c555f51cf5b87547575e6b16546)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="keepInstanceName")
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keepInstanceName"))

    @keep_instance_name.setter
    def keep_instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b7f83ba8b90933cf5ed2e76b396be6f315c217e579d17ce8f14db2e6add7528)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keepInstanceName", value)

    @builtins.property
    @jsii.member(jsii_name="keyPair")
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPair"))

    @key_pair.setter
    def key_pair(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a754aebed12c13c801ad1a8baae4734e3e1d04a3e49b6fbbb93dd3f547760b1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPair", value)

    @builtins.property
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kubernetesVersion"))

    @kubernetes_version.setter
    def kubernetes_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4a4f923cdf8a07b05dc2da741d1e5ab08890798440ca7ae64784e9f1cf569df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bce9b7a500433eec746e5a5c5eed6262671a9667e9886e8b939a22f91f2a3c4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property
    @jsii.member(jsii_name="loginPassword")
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loginPassword"))

    @login_password.setter
    def login_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9a666a1d4822cda0bd1cec01e839617e58b9a1e46507d813e68f2df5d81e09b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loginPassword", value)

    @builtins.property
    @jsii.member(jsii_name="masterCount")
    def master_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterCount"))

    @master_count.setter
    def master_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f28bedf94fe3a142071fcf98cd4ed749b70ab47a912213f9c2b271397a6cc665)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterCount", value)

    @builtins.property
    @jsii.member(jsii_name="masterDataDisk")
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterDataDisk"))

    @master_data_disk.setter
    def master_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d809cd7503813225fef8ebeaaa66656fbee499995f5f080eccd996ffe79a5966)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterDataDisk", value)

    @builtins.property
    @jsii.member(jsii_name="masterDataDisks")
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]]:
        '''
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]], jsii.get(self, "masterDataDisks"))

    @master_data_disks.setter
    def master_data_disks(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.MasterDataDisksProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2d072577beae8e6108e290bf45b66de42634a9a9aa131179cc1d425461893f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterDataDisks", value)

    @builtins.property
    @jsii.member(jsii_name="masterSystemDiskCategory")
    def master_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterSystemDiskCategory"))

    @master_system_disk_category.setter
    def master_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__672f83fbe60a7fef723686d91fc81d4017bb912b3ecaa03d36b7ffa00255205c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSystemDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="masterSystemDiskPerformanceLevel")
    def master_system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
        Valid values: PL0|PL1|PL2|PL3
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterSystemDiskPerformanceLevel"))

    @master_system_disk_performance_level.setter
    def master_system_disk_performance_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__587f37d0aa8f651bac727277e6372a0a6ea19bb69c464776f087fd157ba7c11d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSystemDiskPerformanceLevel", value)

    @builtins.property
    @jsii.member(jsii_name="masterSystemDiskSize")
    def master_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterSystemDiskSize"))

    @master_system_disk_size.setter
    def master_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23dcfa5736cc32cb1b401057c92ffd3126b2c4dc7e9b7bd1a8117865cebf3e67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSystemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="masterSystemDiskSnapshotPolicyId")
    def master_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterSystemDiskSnapshotPolicyId"))

    @master_system_disk_snapshot_policy_id.setter
    def master_system_disk_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3093da54d19d791eb59f3519ccfc162b0308427e2a581175faac2f3fa305002a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSystemDiskSnapshotPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="masterZoneIds")
    def master_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: masterZoneIds: Zone ids of master node virtual switches belongs to.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "masterZoneIds"))

    @master_zone_ids.setter
    def master_zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8afbbf8f27588bdd7c9eef0eef8cde10e7499b8ed4d0dd10030d2afd1ac26cf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterZoneIds", value)

    @builtins.property
    @jsii.member(jsii_name="nodeCidrMask")
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeCidrMask"))

    @node_cidr_mask.setter
    def node_cidr_mask(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__396be76fab2946087210ab7629beb6f998e668aea8969493e493cc54379d0f9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeCidrMask", value)

    @builtins.property
    @jsii.member(jsii_name="nodeNameMode")
    def node_name_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

        - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
        - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeNameMode"))

    @node_name_mode.setter
    def node_name_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__285a09f64698b4db9b6d4efbecc09fb8a780a5ea29ecf95a97f3022eff957724)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeNameMode", value)

    @builtins.property
    @jsii.member(jsii_name="nodePools")
    def node_pools(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolsProperty"]]]]:
        '''
        :Property: nodePools: The configurations of Node pools.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolsProperty"]]]], jsii.get(self, "nodePools"))

    @node_pools.setter
    def node_pools(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee2acb27161166096dbed2949d4a57910e5c001079e3ef1043951c307a5bd382)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodePools", value)

    @builtins.property
    @jsii.member(jsii_name="nodePortRange")
    def node_port_range(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodePortRange"))

    @node_port_range.setter
    def node_port_range(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4bd942bc227f23aacc5a23725e1e172fa120d1d9e4280eb372ec8e5399641c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodePortRange", value)

    @builtins.property
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "numOfNodes"))

    @num_of_nodes.setter
    def num_of_nodes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4898418dbe1cd63bb860b3836e634a1a42be49c12187f81b1053c90f7e0086f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "numOfNodes", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afebc825685dee22c2123c67a59005071ad92c747b0083dd7604b91c08411fbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ba55ee1240c75fd7b03e0cc11f4e2a5125dda20d0578dbf41e29a417e2fbea1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__437c23683d1e06aef7d0735df3fad8c0e441c5c7d8003fef35bad88df3ca973b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="platform")
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "platform"))

    @platform.setter
    def platform(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad2651a716fe6c0cba21ad5f6f065e1f6fa25d03c59197bd0ad60b69c3ff5373)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "platform", value)

    @builtins.property
    @jsii.member(jsii_name="podVswitchIds")
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "podVswitchIds"))

    @pod_vswitch_ids.setter
    def pod_vswitch_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fb9b5c8e47892d4e09b9fa3fc6164aab71f9ddea583e332b965f9274beac94f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "podVswitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyMode"))

    @proxy_mode.setter
    def proxy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__507dc2d2a6b2bcd73f2a41f1670d66515fc6f39fe2194b6fe080d3bb057ea1a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyMode", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9282bbcdb0addd2526d385d643c23236eb3678accf596245cb2a15d88c85ece7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="runtime")
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.RuntimeProperty"]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.RuntimeProperty"]], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.RuntimeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc259dc683a7b502341259dacde0915942e031d6987297f22dfb41238d8824a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "runtime", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7468fb5706df8688ba1b04685ae3a4e823ab02639e78f823bdf72a4aae801938)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31e616a98467d8a7f5a5920f68fa5fcad8889cd19d37994c3c4f86fc108c7c38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceCidr", value)

    @builtins.property
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0153111591dedcc877ad5d586f9617201e4310e96ec7ec4d25134cc952481061)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snatEntry", value)

    @builtins.property
    @jsii.member(jsii_name="socEnabled")
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "socEnabled"))

    @soc_enabled.setter
    def soc_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bea6130a84e1ea3cfab37785aeb83b3ef944651e8248893464afe786fcaeb55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "socEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="sshFlags")
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sshFlags"))

    @ssh_flags.setter
    def ssh_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96e89693139a0ae0c5811086abb30c0062d9964eba92a1318d6d384f9bd17ef5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sshFlags", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosKubernetesCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a59c07ba55203181512d2457f764a261cdce1d25eb6190e322f23c8cd664e19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="taint")
    def taint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], jsii.get(self, "taint"))

    @taint.setter
    def taint(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46cd4a69121d4677a2a7e5e8f213344ae0532158c6ea2ab2b04c044edb53db6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taint", value)

    @builtins.property
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c59adfbc2858cfec85a077c45b21c2d00d1c916c645e7e7d317a5cff1e34ab2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeoutMins", value)

    @builtins.property
    @jsii.member(jsii_name="timeZone")
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeZone: The time zone of the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeZone"))

    @time_zone.setter
    def time_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__629efaff72275decba3980eb14b53d8ce936acc53dbd3a06cd916744992ec828)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeZone", value)

    @builtins.property
    @jsii.member(jsii_name="userCa")
    def user_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userCa: The CA of cluster
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userCa"))

    @user_ca.setter
    def user_ca(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__735d80e3a2de7995ddd0151a5d629aac8255ed5bfcffa2ffd01e8214554968c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userCa", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98483d15d5ba44099767c82496fb904627e0d6f93c841d5bd8fa1fa8c7ce2c5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userData", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerDataDisk"))

    @worker_data_disk.setter
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecc2a49abed7df2d9b1177d081235340de60203a30c60514bd8e437f88359051)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDisk", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]], jsii.get(self, "workerDataDisks"))

    @worker_data_disks.setter
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__846086f4adb04e5bd4307de92946fdc48aca0095c67f7aac2d54d99298b65da6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDisks", value)

    @builtins.property
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "workerInstanceTypes"))

    @worker_instance_types.setter
    def worker_instance_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ba27e54ca5f07bb02e96b5f97c1d17235be2473d4d16345bf729e70ba343ccb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskCategory"))

    @worker_system_disk_category.setter
    def worker_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd0f6033e1020f12d4b79ac1b90e2054674ff2912a32c0383391577442e5413d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskSize"))

    @worker_system_disk_size.setter
    def worker_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24cdafd13f1891366abbc6e32ecc42598d14498c145d674ca78ca97a91040f16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskSnapshotPolicyId")
    def worker_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskSnapshotPolicyId"))

    @worker_system_disk_snapshot_policy_id.setter
    def worker_system_disk_snapshot_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0ec3efa66ca37192216be0ad73d80d488bb7dff5316fabac011e70fe1ceb5d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskSnapshotPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="workerZoneIds")
    def worker_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerZoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "workerZoneIds"))

    @worker_zone_ids.setter
    def worker_zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ee2467d085ae481dfe137e3bd456f0011e2f2155b445b187d56696d99db15e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerZoneIds", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "disabled": "disabled"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7616708e01afe58f407950b0def282077e783040aeed9638afd82d824708e825)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Addon plugin name
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_snapshot_policy_id": "autoSnapshotPolicyId",
            "category": "category",
            "encrypted": "encrypted",
            "performance_level": "performanceLevel",
            "size": "size",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_snapshot_policy_id: 
            :param category: 
            :param encrypted: 
            :param performance_level: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6e8409797cf3bf4b6a8c11a793ee1ae631a0146e14e5b53191f35bcd0218959b)
                check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if auto_snapshot_policy_id is not None:
                self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
            if category is not None:
                self._values["category"] = category
            if encrypted is not None:
                self._values["encrypted"] = encrypted
            if performance_level is not None:
                self._values["performance_level"] = performance_level
            if size is not None:
                self._values["size"] = size

        @builtins.property
        def auto_snapshot_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
            By default, this parameter is empty. This indicates that automatic backup is disabled.
            '''
            result = self._values.get("auto_snapshot_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud: basic disk.
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            encrypted: Specifies whether to encrypt a data disk. Valid values:
            true: encrypts a data disk.
            false: does not encrypt a data disk.
            Default value: false.
            '''
            result = self._values.get("encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            size: The size of a data disk. The size is measured in GiB.
            Valid values: 40 to 32768.
            '''
            result = self._values.get("size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.KubernetesConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "runtime": "runtime",
            "runtime_version": "runtimeVersion",
            "cpu_policy": "cpuPolicy",
            "labels": "labels",
            "node_name_mode": "nodeNameMode",
            "taints": "taints",
        },
    )
    class KubernetesConfigProperty:
        def __init__(
            self,
            *,
            runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            runtime_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            taints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.TaintsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param runtime: 
            :param runtime_version: 
            :param cpu_policy: 
            :param labels: 
            :param node_name_mode: 
            :param taints: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f348519a4adb94f9bd0158ac3a2cdec1e59ddc6485fbd583db5d4ec89c6494bd)
                check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
                check_type(argname="argument runtime_version", value=runtime_version, expected_type=type_hints["runtime_version"])
                check_type(argname="argument cpu_policy", value=cpu_policy, expected_type=type_hints["cpu_policy"])
                check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
                check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
                check_type(argname="argument taints", value=taints, expected_type=type_hints["taints"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "runtime": runtime,
                "runtime_version": runtime_version,
            }
            if cpu_policy is not None:
                self._values["cpu_policy"] = cpu_policy
            if labels is not None:
                self._values["labels"] = labels
            if node_name_mode is not None:
                self._values["node_name_mode"] = node_name_mode
            if taints is not None:
                self._values["taints"] = taints

        @builtins.property
        def runtime(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: runtime: The name of the container runtime.
            '''
            result = self._values.get("runtime")
            assert result is not None, "Required property 'runtime' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def runtime_version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: runtimeVersion: The version of the container runtime.
            '''
            result = self._values.get("runtime_version")
            assert result is not None, "Required property 'runtime_version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cpu_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
            static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
            none: This policy indicates that the default CPU affinity is used.
            Default value: none.
            '''
            result = self._values.get("cpu_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.LabelsProperty"]]]]:
            '''
            :Property: labels: You can add labels to nodes that are added to the cluster.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.LabelsProperty"]]]], result)

        @builtins.property
        def node_name_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

            - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
            - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
            '''
            result = self._values.get("node_name_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def taints(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.TaintsProperty"]]]]:
            '''
            :Property: taints: You can add taints to nodes that are added to the cluster.
            '''
            result = self._values.get("taints")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.TaintsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KubernetesConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2170a50994b498ce3bd38e264d4027399948650bdaea0870172d1de0f42dfecd)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class MasterDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f82b89c036366c8824abbeb4b8c8e99582eb56d31ed8dcac3132b2347f7d1d1f)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MasterDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.NodePoolInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name"},
    )
    class NodePoolInfoProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__35ea6abc5402573bb0f628528fd8cb005a1c356e7e67f5557d482283f61bdb8c)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the node pool.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodePoolInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.NodePoolsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "scaling_group": "scalingGroup",
            "count": "count",
            "kubernetes_config": "kubernetesConfig",
            "node_pool_info": "nodePoolInfo",
        },
    )
    class NodePoolsProperty:
        def __init__(
            self,
            *,
            scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.ScalingGroupProperty", typing.Dict[builtins.str, typing.Any]]],
            count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.KubernetesConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.NodePoolInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param scaling_group: 
            :param count: 
            :param kubernetes_config: 
            :param node_pool_info: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__00f8eed12aacd62d921b941b7cc087e744582c87b9afe88d27ca8ed2f5887e4f)
                check_type(argname="argument scaling_group", value=scaling_group, expected_type=type_hints["scaling_group"])
                check_type(argname="argument count", value=count, expected_type=type_hints["count"])
                check_type(argname="argument kubernetes_config", value=kubernetes_config, expected_type=type_hints["kubernetes_config"])
                check_type(argname="argument node_pool_info", value=node_pool_info, expected_type=type_hints["node_pool_info"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "scaling_group": scaling_group,
            }
            if count is not None:
                self._values["count"] = count
            if kubernetes_config is not None:
                self._values["kubernetes_config"] = kubernetes_config
            if node_pool_info is not None:
                self._values["node_pool_info"] = node_pool_info

        @builtins.property
        def scaling_group(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.ScalingGroupProperty"]:
            '''
            :Property: scalingGroup: The configurations of the scaling group used by the node pool.
            '''
            result = self._values.get("scaling_group")
            assert result is not None, "Required property 'scaling_group' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.ScalingGroupProperty"], result)

        @builtins.property
        def count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: count: The number of nodes in the node pool.
            '''
            result = self._values.get("count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def kubernetes_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.KubernetesConfigProperty"]]:
            '''
            :Property: kubernetesConfig: The configurations of the ACK cluster.
            '''
            result = self._values.get("kubernetes_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.KubernetesConfigProperty"]], result)

        @builtins.property
        def node_pool_info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolInfoProperty"]]:
            '''
            :Property: nodePoolInfo: The configurations of the node pool.
            '''
            result = self._values.get("node_pool_info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.NodePoolInfoProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodePoolsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "version": "version"},
    )
    class RuntimeProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1628d1605b44e26f291bdf72d2d3aa41a599f93f8131991c106e9d77d3a1c9a6)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the container runtime. Supports containerd, docker or sandboxed-container.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The version of the container runtime.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuntimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.ScalingGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_types": "instanceTypes",
            "system_disk_size": "systemDiskSize",
            "v_switch_ids": "vSwitchIds",
            "data_disks": "dataDisks",
            "image_id": "imageId",
            "instance_charge_type": "instanceChargeType",
            "internet_charge_type": "internetChargeType",
            "internet_max_bandwidth_out": "internetMaxBandwidthOut",
            "is_enterprise_security_group": "isEnterpriseSecurityGroup",
            "key_pair": "keyPair",
            "login_password": "loginPassword",
            "period": "period",
            "period_unit": "periodUnit",
            "platform": "platform",
            "rds_instances": "rdsInstances",
            "system_disk_category": "systemDiskCategory",
            "system_disk_performance_level": "systemDiskPerformanceLevel",
            "tags": "tags",
            "zone_ids": "zoneIds",
        },
    )
    class ScalingGroupProperty:
        def __init__(
            self,
            *,
            instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosKubernetesCluster.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_instances: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tags: typing.Optional[typing.Sequence[typing.Union["RosKubernetesCluster.ScalingGroupTagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param instance_types: 
            :param system_disk_size: 
            :param v_switch_ids: 
            :param data_disks: 
            :param image_id: 
            :param instance_charge_type: 
            :param internet_charge_type: 
            :param internet_max_bandwidth_out: 
            :param is_enterprise_security_group: 
            :param key_pair: 
            :param login_password: 
            :param period: 
            :param period_unit: 
            :param platform: 
            :param rds_instances: 
            :param system_disk_category: 
            :param system_disk_performance_level: 
            :param tags: 
            :param zone_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__87b13d50f700a9e33391a71e2db0544dd8c7255c5342f7eb6d26716d0c964b00)
                check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
                check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
                check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
                check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
                check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
                check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
                check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
                check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
                check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
                check_type(argname="argument rds_instances", value=rds_instances, expected_type=type_hints["rds_instances"])
                check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
                check_type(argname="argument system_disk_performance_level", value=system_disk_performance_level, expected_type=type_hints["system_disk_performance_level"])
                check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
                check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_types": instance_types,
                "system_disk_size": system_disk_size,
                "v_switch_ids": v_switch_ids,
            }
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if image_id is not None:
                self._values["image_id"] = image_id
            if instance_charge_type is not None:
                self._values["instance_charge_type"] = instance_charge_type
            if internet_charge_type is not None:
                self._values["internet_charge_type"] = internet_charge_type
            if internet_max_bandwidth_out is not None:
                self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
            if is_enterprise_security_group is not None:
                self._values["is_enterprise_security_group"] = is_enterprise_security_group
            if key_pair is not None:
                self._values["key_pair"] = key_pair
            if login_password is not None:
                self._values["login_password"] = login_password
            if period is not None:
                self._values["period"] = period
            if period_unit is not None:
                self._values["period_unit"] = period_unit
            if platform is not None:
                self._values["platform"] = platform
            if rds_instances is not None:
                self._values["rds_instances"] = rds_instances
            if system_disk_category is not None:
                self._values["system_disk_category"] = system_disk_category
            if system_disk_performance_level is not None:
                self._values["system_disk_performance_level"] = system_disk_performance_level
            if tags is not None:
                self._values["tags"] = tags
            if zone_ids is not None:
                self._values["zone_ids"] = zone_ids

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: instanceTypes: The ECS instance types of the nodes.
            '''
            result = self._values.get("instance_types")
            assert result is not None, "Required property 'instance_types' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def system_disk_size(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
            '''
            result = self._values.get("system_disk_size")
            assert result is not None, "Required property 'system_disk_size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: vSwitchIds: The IDs of vSwitches.
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: The configurations of data disks.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosKubernetesCluster.DataDisksProperty"]]]], result)

        @builtins.property
        def image_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: imageId: The ID of a custom image. By default, the image provided by ACK is used.
            '''
            result = self._values.get("image_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceChargeType: The billing method of nodes in the node pool. Valid values:
            PrePaid: subscription.
            PostPaid: pay-as-you-go.
            Default value: PostPaid.
            '''
            result = self._values.get("instance_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def internet_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
            '''
            result = self._values.get("internet_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def internet_max_bandwidth_out(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            internetMaxBandwidthOut: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("internet_max_bandwidth_out")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_enterprise_security_group(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
            This parameter takes effect only if security_group_id is left empty.
            Note You must specify an advanced security group for a cluster that has Terway installed.
            true: creates an advanced security group.
            false: does not create an advanced security group.
            Default value: false.
            '''
            result = self._values.get("is_enterprise_security_group")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key_pair(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
            '''
            result = self._values.get("key_pair")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def login_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            '''
            result = self._values.get("login_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            Default value: 1.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
            '''
            result = self._values.get("period_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def platform(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            platform: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("platform")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_instances(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: rdsInstances: The IDs of the ApsaraDB RDS instances.
            '''
            result = self._values.get("rds_instances")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def system_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskCategory: The type of system disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("system_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("system_disk_performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tags(
            self,
        ) -> typing.Optional[typing.List["RosKubernetesCluster.ScalingGroupTagsProperty"]]:
            '''
            :Property:

            tags: Adds labels only to ECS instances.
            A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosKubernetesCluster.ScalingGroupTagsProperty"]], result)

        @builtins.property
        def zone_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: zoneIds: Zone ids of virtual switches belongs to.
            '''
            result = self._values.get("zone_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScalingGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.ScalingGroupTagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class ScalingGroupTagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d06c8521de23e4c555ff67693936acbea26f3ffa4214bf16753a80e7965ba2c4)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScalingGroupTagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__39082e7e32411005fd76b2abbcc43efe07560f01d0eac3e884b629b6232183fd)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.TaintsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value", "effect": "effect"},
    )
    class TaintsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            :param effect: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__40fcc900474b41dc5d8678db9088b8c88603978a9ff878493bea4276991b398e)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }
            if effect is not None:
                self._values["effect"] = effect

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            effect: The scheduling policy. Valid values:
            NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
            NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
            PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
            Default value: NoSchedule.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TaintsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9daf9892d7d4f910ad7cbba8a11a5487ba06c931089b10c345f5727ffc24bdfe)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WorkerDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "master_instance_types": "masterInstanceTypes",
        "master_v_switch_ids": "masterVSwitchIds",
        "name": "name",
        "vpc_id": "vpcId",
        "worker_v_switch_ids": "workerVSwitchIds",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "container_cidr": "containerCidr",
        "cpu_policy": "cpuPolicy",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "master_count": "masterCount",
        "master_data_disk": "masterDataDisk",
        "master_data_disks": "masterDataDisks",
        "master_system_disk_category": "masterSystemDiskCategory",
        "master_system_disk_performance_level": "masterSystemDiskPerformanceLevel",
        "master_system_disk_size": "masterSystemDiskSize",
        "master_system_disk_snapshot_policy_id": "masterSystemDiskSnapshotPolicyId",
        "master_zone_ids": "masterZoneIds",
        "node_cidr_mask": "nodeCidrMask",
        "node_name_mode": "nodeNameMode",
        "node_pools": "nodePools",
        "node_port_range": "nodePortRange",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "ssh_flags": "sshFlags",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "time_zone": "timeZone",
        "user_ca": "userCa",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "worker_system_disk_snapshot_policy_id": "workerSystemDiskSnapshotPolicyId",
        "worker_zone_ids": "workerZoneIds",
    },
)
class RosKubernetesClusterProps:
    def __init__(
        self,
        *,
        master_instance_types: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        master_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        worker_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.MasterDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        master_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.NodePoolsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        node_port_range: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.RuntimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ssh_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_ca: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::KubernetesCluster``.

        :param master_instance_types: 
        :param master_v_switch_ids: 
        :param name: 
        :param vpc_id: 
        :param worker_v_switch_ids: 
        :param addons: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param charge_type: 
        :param cis_enabled: 
        :param cloud_monitor_flags: 
        :param container_cidr: 
        :param cpu_policy: 
        :param deletion_protection: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param format_disk: 
        :param is_enterprise_security_group: 
        :param keep_instance_name: 
        :param key_pair: 
        :param kubernetes_version: 
        :param load_balancer_spec: 
        :param login_password: 
        :param master_count: 
        :param master_data_disk: 
        :param master_data_disks: 
        :param master_system_disk_category: 
        :param master_system_disk_performance_level: 
        :param master_system_disk_size: 
        :param master_system_disk_snapshot_policy_id: 
        :param master_zone_ids: 
        :param node_cidr_mask: 
        :param node_name_mode: 
        :param node_pools: 
        :param node_port_range: 
        :param num_of_nodes: 
        :param os_type: 
        :param period: 
        :param period_unit: 
        :param platform: 
        :param pod_vswitch_ids: 
        :param proxy_mode: 
        :param resource_group_id: 
        :param runtime: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param soc_enabled: 
        :param ssh_flags: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param time_zone: 
        :param user_ca: 
        :param user_data: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_instance_types: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        :param worker_system_disk_snapshot_policy_id: 
        :param worker_zone_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6979aed7b14f39598dd4a9bfc17ef34f6561e6a96d23226110864cdb40c9135c)
            check_type(argname="argument master_instance_types", value=master_instance_types, expected_type=type_hints["master_instance_types"])
            check_type(argname="argument master_v_switch_ids", value=master_v_switch_ids, expected_type=type_hints["master_v_switch_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument worker_v_switch_ids", value=worker_v_switch_ids, expected_type=type_hints["worker_v_switch_ids"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cis_enabled", value=cis_enabled, expected_type=type_hints["cis_enabled"])
            check_type(argname="argument cloud_monitor_flags", value=cloud_monitor_flags, expected_type=type_hints["cloud_monitor_flags"])
            check_type(argname="argument container_cidr", value=container_cidr, expected_type=type_hints["container_cidr"])
            check_type(argname="argument cpu_policy", value=cpu_policy, expected_type=type_hints["cpu_policy"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument disable_rollback", value=disable_rollback, expected_type=type_hints["disable_rollback"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument format_disk", value=format_disk, expected_type=type_hints["format_disk"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument keep_instance_name", value=keep_instance_name, expected_type=type_hints["keep_instance_name"])
            check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
            check_type(argname="argument kubernetes_version", value=kubernetes_version, expected_type=type_hints["kubernetes_version"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
            check_type(argname="argument master_count", value=master_count, expected_type=type_hints["master_count"])
            check_type(argname="argument master_data_disk", value=master_data_disk, expected_type=type_hints["master_data_disk"])
            check_type(argname="argument master_data_disks", value=master_data_disks, expected_type=type_hints["master_data_disks"])
            check_type(argname="argument master_system_disk_category", value=master_system_disk_category, expected_type=type_hints["master_system_disk_category"])
            check_type(argname="argument master_system_disk_performance_level", value=master_system_disk_performance_level, expected_type=type_hints["master_system_disk_performance_level"])
            check_type(argname="argument master_system_disk_size", value=master_system_disk_size, expected_type=type_hints["master_system_disk_size"])
            check_type(argname="argument master_system_disk_snapshot_policy_id", value=master_system_disk_snapshot_policy_id, expected_type=type_hints["master_system_disk_snapshot_policy_id"])
            check_type(argname="argument master_zone_ids", value=master_zone_ids, expected_type=type_hints["master_zone_ids"])
            check_type(argname="argument node_cidr_mask", value=node_cidr_mask, expected_type=type_hints["node_cidr_mask"])
            check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
            check_type(argname="argument node_pools", value=node_pools, expected_type=type_hints["node_pools"])
            check_type(argname="argument node_port_range", value=node_port_range, expected_type=type_hints["node_port_range"])
            check_type(argname="argument num_of_nodes", value=num_of_nodes, expected_type=type_hints["num_of_nodes"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument pod_vswitch_ids", value=pod_vswitch_ids, expected_type=type_hints["pod_vswitch_ids"])
            check_type(argname="argument proxy_mode", value=proxy_mode, expected_type=type_hints["proxy_mode"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument soc_enabled", value=soc_enabled, expected_type=type_hints["soc_enabled"])
            check_type(argname="argument ssh_flags", value=ssh_flags, expected_type=type_hints["ssh_flags"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument taint", value=taint, expected_type=type_hints["taint"])
            check_type(argname="argument timeout_mins", value=timeout_mins, expected_type=type_hints["timeout_mins"])
            check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            check_type(argname="argument user_ca", value=user_ca, expected_type=type_hints["user_ca"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument worker_data_disk", value=worker_data_disk, expected_type=type_hints["worker_data_disk"])
            check_type(argname="argument worker_data_disks", value=worker_data_disks, expected_type=type_hints["worker_data_disks"])
            check_type(argname="argument worker_instance_types", value=worker_instance_types, expected_type=type_hints["worker_instance_types"])
            check_type(argname="argument worker_system_disk_category", value=worker_system_disk_category, expected_type=type_hints["worker_system_disk_category"])
            check_type(argname="argument worker_system_disk_size", value=worker_system_disk_size, expected_type=type_hints["worker_system_disk_size"])
            check_type(argname="argument worker_system_disk_snapshot_policy_id", value=worker_system_disk_snapshot_policy_id, expected_type=type_hints["worker_system_disk_snapshot_policy_id"])
            check_type(argname="argument worker_zone_ids", value=worker_zone_ids, expected_type=type_hints["worker_zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "master_instance_types": master_instance_types,
            "master_v_switch_ids": master_v_switch_ids,
            "name": name,
            "vpc_id": vpc_id,
            "worker_v_switch_ids": worker_v_switch_ids,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if cpu_policy is not None:
            self._values["cpu_policy"] = cpu_policy
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if master_count is not None:
            self._values["master_count"] = master_count
        if master_data_disk is not None:
            self._values["master_data_disk"] = master_data_disk
        if master_data_disks is not None:
            self._values["master_data_disks"] = master_data_disks
        if master_system_disk_category is not None:
            self._values["master_system_disk_category"] = master_system_disk_category
        if master_system_disk_performance_level is not None:
            self._values["master_system_disk_performance_level"] = master_system_disk_performance_level
        if master_system_disk_size is not None:
            self._values["master_system_disk_size"] = master_system_disk_size
        if master_system_disk_snapshot_policy_id is not None:
            self._values["master_system_disk_snapshot_policy_id"] = master_system_disk_snapshot_policy_id
        if master_zone_ids is not None:
            self._values["master_zone_ids"] = master_zone_ids
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if node_name_mode is not None:
            self._values["node_name_mode"] = node_name_mode
        if node_pools is not None:
            self._values["node_pools"] = node_pools
        if node_port_range is not None:
            self._values["node_port_range"] = node_port_range
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if ssh_flags is not None:
            self._values["ssh_flags"] = ssh_flags
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if time_zone is not None:
            self._values["time_zone"] = time_zone
        if user_ca is not None:
            self._values["user_ca"] = user_ca
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if worker_system_disk_snapshot_policy_id is not None:
            self._values["worker_system_disk_snapshot_policy_id"] = worker_system_disk_snapshot_policy_id
        if worker_zone_ids is not None:
            self._values["worker_zone_ids"] = worker_zone_ids

    @builtins.property
    def master_instance_types(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        masterInstanceTypes: Master node ECS specification type code. For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        List size must be 3, Instance Type can be repeated.
        '''
        result = self._values.get("master_instance_types")
        assert result is not None, "Required property 'master_instance_types' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def master_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: masterVSwitchIds: Master node switch ID. To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        '''
        result = self._values.get("master_v_switch_ids")
        assert result is not None, "Required property 'master_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def worker_v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workerVSwitchIds: The virtual switch ID of the worker node.
        '''
        result = self._values.get("worker_v_switch_ids")
        assert result is not None, "Required property 'worker_v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cpu_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpuPolicy: CPU policy. The cluster version is 1.12.6 and above supports both static and none strategies.
        '''
        result = self._values.get("cpu_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterCount: Number of master instances. The value can be 3 or 5. The default value is 3.
        '''
        result = self._values.get("master_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterDataDisk: Whether the master node mounts data disks can be selected as:
        true: mount the data disk
        false: no data disk is mounted, default is false
        '''
        result = self._values.get("master_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]]:
        '''
        :Property: masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is valid only when the master node data disk is mounted.
        '''
        result = self._values.get("master_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]], result)

    @builtins.property
    def master_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterSystemDiskCategory: Master disk system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        '''
        result = self._values.get("master_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_system_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
        Valid values: PL0|PL1|PL2|PL3
        '''
        result = self._values.get("master_system_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        masterSystemDiskSize: Master disk system disk size in GiB.
        Default to 120.
        '''
        result = self._values.get("master_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
        '''
        result = self._values.get("master_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: masterZoneIds: Zone ids of master node virtual switches belongs to.
        '''
        result = self._values.get("master_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_name_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

        - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
        - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        '''
        result = self._values.get("node_name_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_pools(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.NodePoolsProperty]]]]:
        '''
        :Property: nodePools: The configurations of Node pools.
        '''
        result = self._values.get("node_pools")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.NodePoolsProperty]]]], result)

    @builtins.property
    def node_port_range(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodePortRange: Node service port. The value range is [30000, 65535].
        Default to 30000-65535.
        '''
        result = self._values.get("node_port_range")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.RuntimeProperty]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.RuntimeProperty]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ssh_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sshFlags: Whether to enable public network SSH login:
        true: open
        false: not open
        '''
        result = self._values.get("ssh_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def time_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeZone: The time zone of the cluster.
        '''
        result = self._values.get("time_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userCa: The CA of cluster
        '''
        result = self._values.get("user_ca")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_snapshot_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
        '''
        result = self._values.get("worker_system_disk_snapshot_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerZoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        result = self._values.get("worker_zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedEdgeKubernetesCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosManagedEdgeKubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8430a012b9ef782603813835c54b2ce9251c32f0f66644361d314adebd686f1f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c85b383dec176482467917d687f3fd4f44f3c0731144a2303d76e89f537fdd7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8070bea54d91a21e17f5dd1ffd18c8805f8e600ed8f862caf4fa789911f9737c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c06a53a845b55082f3427661623ab7b98741e7d63b04bf7e4c82c644089dccd7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "numOfNodes"))

    @num_of_nodes.setter
    def num_of_nodes(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79bbb839bdad642d4cea0181e2524bdd85c06731f31009deeb5770a7e50bb080)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "numOfNodes", value)

    @builtins.property
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d23794e8834f60b4b8a6612c075c18401a89a3197dce645d433cb1f9a09a1ddf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addons", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__879a8b32ce71b9ab3f9bea3e364e89226088204e24246716eaa11626447558e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87e8b8f8472803cc87ead52d7b55142be23a555dd21d7e87cf2f156df699363f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68c4879321d0a0d1bb0a75380e6f8b897eb5a79d84f4bacb11715aa0beb53b65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cloudMonitorFlags"))

    @cloud_monitor_flags.setter
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db6de90b489ac3f57bbc8d5f96ac235bfbbc4495fc0c8e8be98b7d65508f9f73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The edge managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__960c0f25711e7afca2028595f29f7a6d92b0acdbe7297e303f056b57cc8bcfcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterSpec", value)

    @builtins.property
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerCidr"))

    @container_cidr.setter
    def container_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2174ce6b92f1e370b708958051827e54a838b546c5385451098ceb7ccb3d02f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerCidr", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f8bc8e21ab04daaba82ed296f88f759f08a1c22ac76c60e9305a9398da01c3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disableRollback"))

    @disable_rollback.setter
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c344e464873c36da4578a6c9b65ae1f451f8679e2d73eba52489ac534f0869d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disableRollback", value)

    @builtins.property
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0564328c30fd0d450a1eb1fc679d57732c2c3d49582c5f46e7a44d7302213e27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d92d511b1f45a9928323a39d2389b64050788199e8c1a29ea63d429878bca9be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="keyPair")
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPair"))

    @key_pair.setter
    def key_pair(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b091ae05d7cfcba3b579d9a580a7a5d1529340a4bad81bc4011d86366b878368)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPair", value)

    @builtins.property
    @jsii.member(jsii_name="loginPassword")
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loginPassword"))

    @login_password.setter
    def login_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05fef4b649fec8346945319324ca65f1cf85d5ccbb172903dc5a6c109db183d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loginPassword", value)

    @builtins.property
    @jsii.member(jsii_name="nodeCidrMask")
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeCidrMask"))

    @node_cidr_mask.setter
    def node_cidr_mask(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa94cc942d87e2e7d8af1767b53e866ed6a480e35e5ff3c2fb2fc09f18984c19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeCidrMask", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4b8c44509857f97fdc799b4ba47b7ea2e2ac251cb02140e5a96d858393a2f1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c2ff65bc65f1c560b0c830a8e1f7caca4b553688db176c50b4e0a130d7dc57d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="profile")
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: profile: Edge cluster ID. The default value is Edge.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "profile"))

    @profile.setter
    def profile(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36bba90c300371d3e37c020f4cdd10bc78f2ec210c4ee0d72a02279a1c0359e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "profile", value)

    @builtins.property
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyMode"))

    @proxy_mode.setter
    def proxy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3730f0cebdd46586796a3057acabf1c6cdac1bf00c36becfdd25daa2690cab6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyMode", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d0ef4699c9727bdd4ca2bd61d964691f5d8d38fc734901de6f4a0ff0a5b5841)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de291af58c6be589d4e56d2fa677300d104e1a7db3a7d8def8dda9ee9ff4aae3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceCidr", value)

    @builtins.property
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__487c7879a5c73cbab6f421374bc8191f0bc7aebc1d1083fefdf4f36d7ab39652)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snatEntry", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosManagedEdgeKubernetesCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ed543943514adeed0a586caf14b71e13687d2ac259e3e45b86d95370630335e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__153c00f81cd166902bc4cab4ad2ce420bf16a5b846811d27e6fc0ef5c278d893)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeoutMins", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd41a6e1564a75fef5c152741881954a023b2bfaeaab48ae159072b876458dfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0b7bcac5eed4ecb0da075c98d2d1c40b86bf6fbef018eeef63d60c65639e90b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerDataDisk"))

    @worker_data_disk.setter
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7eca764f271df8e7566ef1b5ca37eaade9c6d38a55f3f7c1ee8380a8185be30b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDisk", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDiskCategory")
    def worker_data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workerDataDiskCategory: Data disk type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerDataDiskCategory"))

    @worker_data_disk_category.setter
    def worker_data_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad9dfe7863c8207e3f6f9cbc25acf5c3bbbda0e402f73d50593d95fd52e9b67f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty"]]]], jsii.get(self, "workerDataDisks"))

    @worker_data_disks.setter
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91d2f4cbf1a7e7e0afa63df565e58ca9f48248ea39d31265fd88fd74147ddae9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDisks", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDiskSize")
    def worker_data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workerDataDiskSize: Data disk size in GiB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerDataDiskSize"))

    @worker_data_disk_size.setter
    def worker_data_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a174afd0771d04db365e47cde49a3f2b1b74ac51d3006c486ff9f817595a80b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "workerInstanceTypes"))

    @worker_instance_types.setter
    def worker_instance_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19f791204c2b9d0d86a8036a97e5514e5dc2ad9d3a55e01f447a43065cdeeecd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskCategory"))

    @worker_system_disk_category.setter
    def worker_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49989d9400fee96d2e937e812ba9bfa5fcbbc7146c8240a7c24448c7f1c78702)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskSize"))

    @worker_system_disk_size.setter
    def worker_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be217cf9a87a4cb9c9b733d8117ba74a3d519c403bc77c74f3f0a86565c3c62b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="zoneIds")
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: zoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "zoneIds"))

    @zone_ids.setter
    def zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__614556afc7474df5007b41a638a656676312119ad378a36852f802bbcb4b987d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneIds", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "config": "config", "disabled": "disabled"},
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d3e064df0beffeaa0da2cbb78f29cc5eb6d58610abcdf4e35fcaa4c27220c506)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the add-on.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f465bdcd12340b103327cdbc977ad30ea04aeaa9472d47e4614316bd58451329)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__14a64ca8c41a1799485f941b6c32244f32b933a5cbd4666b7430cdffb1cc353d)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WorkerDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "num_of_nodes": "numOfNodes",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "endpoint_public_access": "endpointPublicAccess",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "key_pair": "keyPair",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "period": "period",
        "period_unit": "periodUnit",
        "profile": "profile",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "tags": "tags",
        "timeout_mins": "timeoutMins",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disk_category": "workerDataDiskCategory",
        "worker_data_disks": "workerDataDisks",
        "worker_data_disk_size": "workerDataDiskSize",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "zone_ids": "zoneIds",
    },
)
class RosManagedEdgeKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        num_of_nodes: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedEdgeKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosManagedEdgeKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        worker_data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedEdgeKubernetesCluster``.

        :param name: 
        :param num_of_nodes: 
        :param addons: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param charge_type: 
        :param cloud_monitor_flags: 
        :param cluster_spec: 
        :param container_cidr: 
        :param deletion_protection: 
        :param disable_rollback: 
        :param endpoint_public_access: 
        :param is_enterprise_security_group: 
        :param key_pair: 
        :param login_password: 
        :param node_cidr_mask: 
        :param period: 
        :param period_unit: 
        :param profile: 
        :param proxy_mode: 
        :param resource_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param tags: 
        :param timeout_mins: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param worker_data_disk: 
        :param worker_data_disk_category: 
        :param worker_data_disks: 
        :param worker_data_disk_size: 
        :param worker_instance_types: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        :param zone_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34fbd37b9e98c57ae112bd4fd9e53d814f39b7b1905afd1dea27340b40d29dd5)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument num_of_nodes", value=num_of_nodes, expected_type=type_hints["num_of_nodes"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cloud_monitor_flags", value=cloud_monitor_flags, expected_type=type_hints["cloud_monitor_flags"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument container_cidr", value=container_cidr, expected_type=type_hints["container_cidr"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument disable_rollback", value=disable_rollback, expected_type=type_hints["disable_rollback"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
            check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
            check_type(argname="argument node_cidr_mask", value=node_cidr_mask, expected_type=type_hints["node_cidr_mask"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument profile", value=profile, expected_type=type_hints["profile"])
            check_type(argname="argument proxy_mode", value=proxy_mode, expected_type=type_hints["proxy_mode"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timeout_mins", value=timeout_mins, expected_type=type_hints["timeout_mins"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument worker_data_disk", value=worker_data_disk, expected_type=type_hints["worker_data_disk"])
            check_type(argname="argument worker_data_disk_category", value=worker_data_disk_category, expected_type=type_hints["worker_data_disk_category"])
            check_type(argname="argument worker_data_disks", value=worker_data_disks, expected_type=type_hints["worker_data_disks"])
            check_type(argname="argument worker_data_disk_size", value=worker_data_disk_size, expected_type=type_hints["worker_data_disk_size"])
            check_type(argname="argument worker_instance_types", value=worker_instance_types, expected_type=type_hints["worker_instance_types"])
            check_type(argname="argument worker_system_disk_category", value=worker_system_disk_category, expected_type=type_hints["worker_system_disk_category"])
            check_type(argname="argument worker_system_disk_size", value=worker_system_disk_size, expected_type=type_hints["worker_system_disk_size"])
            check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "num_of_nodes": num_of_nodes,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if profile is not None:
            self._values["profile"] = profile
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if tags is not None:
            self._values["tags"] = tags
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_ids is not None:
            self._values["v_switch_ids"] = v_switch_ids
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disk_category is not None:
            self._values["worker_data_disk_category"] = worker_data_disk_category
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_data_disk_size is not None:
            self._values["worker_data_disk_size"] = worker_data_disk_size
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if zone_ids is not None:
            self._values["zone_ids"] = zone_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: numOfNodes: Number of worker nodes. The range is [0,300]
        '''
        result = self._values.get("num_of_nodes")
        assert result is not None, "Required property 'num_of_nodes' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedEdgeKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property: addons: The add-ons to be installed for the cluster.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedEdgeKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The edge managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def profile(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: profile: Edge cluster ID. The default value is Edge.
        '''
        result = self._values.get("profile")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosManagedEdgeKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosManagedEdgeKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: VPC ID. If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
        VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        result = self._values.get("v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workerDataDiskCategory: Data disk type.
        '''
        result = self._values.get("worker_data_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty]]]], result)

    @builtins.property
    def worker_data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workerDataDiskSize: Data disk size in GiB.
        '''
        result = self._values.get("worker_data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type.
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: zoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        result = self._values.get("zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedEdgeKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedKubernetesCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
):
    '''A ROS template type:  ``ALIYUN::CS::ManagedKubernetesCluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosManagedKubernetesClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e53cb9c0deab8e984f886372f70768456a750b1eb49330f025c92e79def95379)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e671d5e7ca37c92d2b4aca6c70074fcce458ac66f9bb8078aec26cbc3187611c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiServerSlbId")
    def attr_api_server_slb_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: APIServerSLBId: The id of API server SLB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiServerSlbId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: Cluster instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultUserKubeConfig")
    def attr_default_user_kube_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultUserKubeConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrNodes")
    def attr_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Nodes: The list of cluster nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateUserKubConfig")
    def attr_private_user_kub_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateUserKubConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationId")
    def attr_scaling_configuration_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationId: Scaling configuration id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupId")
    def attr_scaling_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupId: Scaling group id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingRuleId")
    def attr_scaling_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingRuleId: Scaling rule id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Task ID. Automatically assigned by the system, the user queries the task status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkerRamRoleName")
    def attr_worker_ram_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkerRamRoleName: Worker ram role name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkerRamRoleName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__980e7a1073a4040963757a0287a1630b7e9a19c96935fcbd2871bd7ea3277acc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7f92507332f2bea0b39b97dd59f4d539cc0372dfae87873ddca55ace7214454)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f40e9cbd2752f9108ef7a29bf19739205577baa49fd015a1359c737c22b36111)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60b8b268d8a990d81977d1a447698eca2f7dd6d067e69e0876b875def10f5cf8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="addons")
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]], jsii.get(self, "addons"))

    @addons.setter
    def addons(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.AddonsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9346c99111b30d7a00f1440075f405bd7bd73a7b742ed8d95b53c3c4fef0c32b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addons", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__454dbc4684a92376d4e5d9cfc45ba813fabba6b8c26a26a5ba518abd0290e93f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea3d3347761102b155fd18058cd05d418e73285b26f879a5cdea667b04af2232)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45e9d09ae224e09e6bfec5b41e283aafc7e4e52714e2b29417303a20ef571460)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="cisEnabled")
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cisEnabled"))

    @cis_enabled.setter
    def cis_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af87f057867aca509d6d30338909cca566a284e52d51974ac2d2688862be49af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cisEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="cloudMonitorFlags")
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cloudMonitorFlags"))

    @cloud_monitor_flags.setter
    def cloud_monitor_flags(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88a503bdda6a73717f199d1608aea3887b32b66dd52fa894f1971ab4d01848e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloudMonitorFlags", value)

    @builtins.property
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4096d95fee275524ec3bb73727fd1b562493b0ee896727894fb4b80ead72e6df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterSpec", value)

    @builtins.property
    @jsii.member(jsii_name="containerCidr")
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "containerCidr"))

    @container_cidr.setter
    def container_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0797507578b56141319a08322bc1c9bd4616b0b23bf36bed37687ae5fe13053)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerCidr", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d84ba179941043050ebfdda52fac753686d34233380b53fad93153b8f02bf13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="disableRollback")
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disableRollback"))

    @disable_rollback.setter
    def disable_rollback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e5febd542306e44827d87a8e0245f3c45e9a1bcbc788231ad4ce54e5a6ac669)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disableRollback", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionProviderKey")
    def encryption_provider_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionProviderKey"))

    @encryption_provider_key.setter
    def encryption_provider_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__088b17f097263ba0820844821a5b5bdcdbb33090b99338db75f5e44275a505db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionProviderKey", value)

    @builtins.property
    @jsii.member(jsii_name="endpointPublicAccess")
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointPublicAccess"))

    @endpoint_public_access.setter
    def endpoint_public_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dfa6d3d6fe881be96fb6354301e3b04914afa2b6b92fa95f1dd3533d2696257)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointPublicAccess", value)

    @builtins.property
    @jsii.member(jsii_name="formatDisk")
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "formatDisk"))

    @format_disk.setter
    def format_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad5ab0c5245ac2b690eb22161a541b9fd949d99f7d516c80665be46f3f6d0195)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "formatDisk", value)

    @builtins.property
    @jsii.member(jsii_name="isEnterpriseSecurityGroup")
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isEnterpriseSecurityGroup"))

    @is_enterprise_security_group.setter
    def is_enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecf32f98f256d01ecd30bfcee2361de154b4099e4f5237d2ce34858fdc1b354c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isEnterpriseSecurityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="keepInstanceName")
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keepInstanceName"))

    @keep_instance_name.setter
    def keep_instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00c48c19bf67dae9219535c7fd6b70e3fc020e757248d64e231c2c5d04b58bfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keepInstanceName", value)

    @builtins.property
    @jsii.member(jsii_name="keyPair")
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPair"))

    @key_pair.setter
    def key_pair(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6e15d01fd9b80f839ef4ae89f7b69f5e12080376539771ae09019888f825642)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPair", value)

    @builtins.property
    @jsii.member(jsii_name="kubernetesVersion")
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kubernetesVersion"))

    @kubernetes_version.setter
    def kubernetes_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__274ea41b99e04e10f7b5e4fd9ebffa9de33c9bfebf96ab0611d70e8726a19463)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kubernetesVersion", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9d1336b8cc8caa24bb400f3b35faff51a136912c1a2f60b3aac6a6c8e785bab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property
    @jsii.member(jsii_name="loginPassword")
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loginPassword"))

    @login_password.setter
    def login_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b743b51eb1be02175ec474acf75b1240f531b9d99cc835cbcc1173b51acc1364)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loginPassword", value)

    @builtins.property
    @jsii.member(jsii_name="nodeCidrMask")
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeCidrMask"))

    @node_cidr_mask.setter
    def node_cidr_mask(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f284e8adc146407b3bdd556a4a131568b28d7c7f89acecb8ece16e072fc889e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeCidrMask", value)

    @builtins.property
    @jsii.member(jsii_name="nodeNameMode")
    def node_name_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

        - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
        - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nodeNameMode"))

    @node_name_mode.setter
    def node_name_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d53a9855f98ddcf2080b9ce3175149dbbfc6fe260811778845f3043478c1bd31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeNameMode", value)

    @builtins.property
    @jsii.member(jsii_name="nodePools")
    def node_pools(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolsProperty"]]]]:
        '''
        :Property: nodePools: The configurations of Node pools.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolsProperty"]]]], jsii.get(self, "nodePools"))

    @node_pools.setter
    def node_pools(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07e8a13838709b62fec56a790a5aa4e515d01858dec1152a084ef7395f238c31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodePools", value)

    @builtins.property
    @jsii.member(jsii_name="numOfNodes")
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "numOfNodes"))

    @num_of_nodes.setter
    def num_of_nodes(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d25c0ef303b8f7729371435106a6b50fb4aef478b9f9f4d3ec98292705f4f9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "numOfNodes", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0ad67ca7ea0665613c0c34be5712087b8ec95f7bb25beb088db7df9f1149305)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcdd424086e33ba641494f18533882ac53c285a85be8837b64ffb3c24c537691)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47ebce8d25f1f0f24d7eaebb04fc89ba1fcc8339ab54a615689d2bc3dce5638a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="platform")
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "platform"))

    @platform.setter
    def platform(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b39f2bc7ab2b0a10b6f392b35e47e8140217f445d000ad3ec445192fc7443a65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "platform", value)

    @builtins.property
    @jsii.member(jsii_name="podVswitchIds")
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "podVswitchIds"))

    @pod_vswitch_ids.setter
    def pod_vswitch_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8731a447318d1309d5b96f42024dd7f2bca54788cf1b602612aad0eb1bc1a2aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "podVswitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="proxyMode")
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyMode"))

    @proxy_mode.setter
    def proxy_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34eea052513715c7f0f36321c8b20a0a33d286b454edca6a8b22d8952190fff3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyMode", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91c02c46a2eafe0f6169683940870098b6257cfd4f5790b4b1a101251a808754)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="runtime")
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.RuntimeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__120868c11b816b248923a0cd423546ecdbf31b75a45d0b27583e76490995a912)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "runtime", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a5768174480726a40346105966b7f78fa630b0b450d8fc83a6537c678ea5ce4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceCidr")
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceCidr"))

    @service_cidr.setter
    def service_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e434516408346d4d5066e68fe7577a813989639f1c3e6e2f03ecce419b7097cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceCidr", value)

    @builtins.property
    @jsii.member(jsii_name="snatEntry")
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "snatEntry"))

    @snat_entry.setter
    def snat_entry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a12e98c0e093ee527989ca7f40562efaa70c61d91e79a2dba0b1c792dc90953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snatEntry", value)

    @builtins.property
    @jsii.member(jsii_name="socEnabled")
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "socEnabled"))

    @soc_enabled.setter
    def soc_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4f9c4a6de6c7323aed73d6b24f1224faf540457583ffd8cd927a47f1a358c63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "socEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        return typing.cast(typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosManagedKubernetesCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80a298c038dfb84e8986d7cf61cb110129c650f1047d3aa0499a18031bf860d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="taint")
    def taint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], jsii.get(self, "taint"))

    @taint.setter
    def taint(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4e352f03bd9d575261ec2743421fa8ddc1f74ef57d4651f71bba17d20c51779)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taint", value)

    @builtins.property
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bd691f8d35ec55da8750e5b65e31e645507da60ce455e185f771a2b38bacaa5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeoutMins", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3172447efbd54877b7d3350bd789363c1701268f0e8c6a0f27f5f72b62b0265)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userData", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDisk")
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerDataDisk"))

    @worker_data_disk.setter
    def worker_data_disk(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e6906fea24db6896120daf1139e2e16fa11aadd25fa49e0d3af31c9212ec5d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDisk", value)

    @builtins.property
    @jsii.member(jsii_name="workerDataDisks")
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]], jsii.get(self, "workerDataDisks"))

    @worker_data_disks.setter
    def worker_data_disks(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.WorkerDataDisksProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ba0924a71faac826048c08e6f4ce0d603e15cd161719fc0d5c4f94896fa2b51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerDataDisks", value)

    @builtins.property
    @jsii.member(jsii_name="workerInstanceTypes")
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "workerInstanceTypes"))

    @worker_instance_types.setter
    def worker_instance_types(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__234d6b3d667544f902dafdfac36af861a030d694a25441154da81d8951cf7c6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerInstanceTypes", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskCategory")
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskCategory"))

    @worker_system_disk_category.setter
    def worker_system_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f4a3b4023566a6b1932c058023b379fe1f6032c9f1ec53b839cce4c88b1a7c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="workerSystemDiskSize")
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workerSystemDiskSize"))

    @worker_system_disk_size.setter
    def worker_system_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05439ca2a09a2374c5e0eb12ef7083658aafb36a13570721f4f6be7a3767e4ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workerSystemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="zoneIds")
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: zoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "zoneIds"))

    @zone_ids.setter
    def zone_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7879397aeae50845a131b7b351b6acc619f36519f7028734428e9bbf69349834)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneIds", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.AddonsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "config": "config",
            "disabled": "disabled",
            "version": "version",
        },
    )
    class AddonsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param config: 
            :param disabled: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0bef9a81aa531b53eac68765d614f6fb5d8ac37ec58d325c00bb0d227f17fc69)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if config is not None:
                self._values["config"] = config
            if disabled is not None:
                self._values["disabled"] = disabled
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Addon plugin name
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: config: When the value is empty, no configuration is required.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: disabled: Specifies whether to disable default installation.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: When the value is empty, the latest version is selected by default.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AddonsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "auto_snapshot_policy_id": "autoSnapshotPolicyId",
            "category": "category",
            "encrypted": "encrypted",
            "performance_level": "performanceLevel",
            "size": "size",
        },
    )
    class DataDisksProperty:
        def __init__(
            self,
            *,
            auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param auto_snapshot_policy_id: 
            :param category: 
            :param encrypted: 
            :param performance_level: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__774332cc8660f2df0388a3aec9b9a812ebf0057bf2eaf9a92798be57fd4034c3)
                check_type(argname="argument auto_snapshot_policy_id", value=auto_snapshot_policy_id, expected_type=type_hints["auto_snapshot_policy_id"])
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if auto_snapshot_policy_id is not None:
                self._values["auto_snapshot_policy_id"] = auto_snapshot_policy_id
            if category is not None:
                self._values["category"] = category
            if encrypted is not None:
                self._values["encrypted"] = encrypted
            if performance_level is not None:
                self._values["performance_level"] = performance_level
            if size is not None:
                self._values["size"] = size

        @builtins.property
        def auto_snapshot_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoSnapshotPolicyId: The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.
            By default, this parameter is empty. This indicates that automatic backup is disabled.
            '''
            result = self._values.get("auto_snapshot_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            category: The type of data disk. Valid values:
            cloud: basic disk.
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def encrypted(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            encrypted: Specifies whether to encrypt a data disk. Valid values:
            true: encrypts a data disk.
            false: does not encrypt a data disk.
            Default value: false.
            '''
            result = self._values.get("encrypted")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            size: The size of a data disk. The size is measured in GiB.
            Valid values: 40 to 32768.
            '''
            result = self._values.get("size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.KubernetesConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "runtime": "runtime",
            "runtime_version": "runtimeVersion",
            "cpu_policy": "cpuPolicy",
            "labels": "labels",
            "node_name_mode": "nodeNameMode",
            "taints": "taints",
        },
    )
    class KubernetesConfigProperty:
        def __init__(
            self,
            *,
            runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            runtime_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            taints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.TaintsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param runtime: 
            :param runtime_version: 
            :param cpu_policy: 
            :param labels: 
            :param node_name_mode: 
            :param taints: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__eaaf0eeda722a1cdc856abbe3f3874fcdedc33790505038d88ddf9f03cb2f955)
                check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
                check_type(argname="argument runtime_version", value=runtime_version, expected_type=type_hints["runtime_version"])
                check_type(argname="argument cpu_policy", value=cpu_policy, expected_type=type_hints["cpu_policy"])
                check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
                check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
                check_type(argname="argument taints", value=taints, expected_type=type_hints["taints"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "runtime": runtime,
                "runtime_version": runtime_version,
            }
            if cpu_policy is not None:
                self._values["cpu_policy"] = cpu_policy
            if labels is not None:
                self._values["labels"] = labels
            if node_name_mode is not None:
                self._values["node_name_mode"] = node_name_mode
            if taints is not None:
                self._values["taints"] = taints

        @builtins.property
        def runtime(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: runtime: The name of the container runtime.
            '''
            result = self._values.get("runtime")
            assert result is not None, "Required property 'runtime' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def runtime_version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: runtimeVersion: The version of the container runtime.
            '''
            result = self._values.get("runtime_version")
            assert result is not None, "Required property 'runtime_version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cpu_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            cpuPolicy: The CPU policy. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later. Valid values:
            static: This policy allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
            none: This policy indicates that the default CPU affinity is used.
            Default value: none.
            '''
            result = self._values.get("cpu_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.LabelsProperty"]]]]:
            '''
            :Property: labels: You can add labels to nodes that are added to the cluster.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.LabelsProperty"]]]], result)

        @builtins.property
        def node_name_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

            - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
            - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
            '''
            result = self._values.get("node_name_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def taints(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.TaintsProperty"]]]]:
            '''
            :Property: taints: You can add taints to nodes that are added to the cluster.
            '''
            result = self._values.get("taints")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.TaintsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KubernetesConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b6cde52040da59e44617b27f2ea21aef7e290f1e733469ab418165ab8d9e74d0)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name"},
    )
    class NodePoolInfoProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9bd6183748a3ae1bf852454c96cf2b1c54f4d661686dde282e2ef93162081bd0)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the node pool.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodePoolInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "scaling_group": "scalingGroup",
            "count": "count",
            "kubernetes_config": "kubernetesConfig",
            "node_pool_info": "nodePoolInfo",
        },
    )
    class NodePoolsProperty:
        def __init__(
            self,
            *,
            scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.ScalingGroupProperty", typing.Dict[builtins.str, typing.Any]]],
            count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.KubernetesConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.NodePoolInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param scaling_group: 
            :param count: 
            :param kubernetes_config: 
            :param node_pool_info: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e1efcdc61d65575f08e7cc548e7968c70d05e7abb2c10daeacf321a87bb85eb0)
                check_type(argname="argument scaling_group", value=scaling_group, expected_type=type_hints["scaling_group"])
                check_type(argname="argument count", value=count, expected_type=type_hints["count"])
                check_type(argname="argument kubernetes_config", value=kubernetes_config, expected_type=type_hints["kubernetes_config"])
                check_type(argname="argument node_pool_info", value=node_pool_info, expected_type=type_hints["node_pool_info"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "scaling_group": scaling_group,
            }
            if count is not None:
                self._values["count"] = count
            if kubernetes_config is not None:
                self._values["kubernetes_config"] = kubernetes_config
            if node_pool_info is not None:
                self._values["node_pool_info"] = node_pool_info

        @builtins.property
        def scaling_group(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.ScalingGroupProperty"]:
            '''
            :Property: scalingGroup: The configurations of the scaling group used by the node pool.
            '''
            result = self._values.get("scaling_group")
            assert result is not None, "Required property 'scaling_group' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.ScalingGroupProperty"], result)

        @builtins.property
        def count(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: count: The number of nodes in the node pool.
            '''
            result = self._values.get("count")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def kubernetes_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.KubernetesConfigProperty"]]:
            '''
            :Property: kubernetesConfig: The configurations of the ACK cluster.
            '''
            result = self._values.get("kubernetes_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.KubernetesConfigProperty"]], result)

        @builtins.property
        def node_pool_info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolInfoProperty"]]:
            '''
            :Property: nodePoolInfo: The configurations of the node pool.
            '''
            result = self._values.get("node_pool_info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.NodePoolInfoProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NodePoolsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.RuntimeProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "version": "version"},
    )
    class RuntimeProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__03777fb9c01e5955d6fd74fdcd1780d393eb9a9d6e35b6a4e880d2f381ace9eb)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
            }
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the container runtime. Supports containerd, Docker or Sandboxed-Container.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The version of the container runtime.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuntimeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_types": "instanceTypes",
            "system_disk_size": "systemDiskSize",
            "v_switch_ids": "vSwitchIds",
            "data_disks": "dataDisks",
            "image_id": "imageId",
            "instance_charge_type": "instanceChargeType",
            "internet_charge_type": "internetChargeType",
            "internet_max_bandwidth_out": "internetMaxBandwidthOut",
            "is_enterprise_security_group": "isEnterpriseSecurityGroup",
            "key_pair": "keyPair",
            "login_password": "loginPassword",
            "period": "period",
            "period_unit": "periodUnit",
            "platform": "platform",
            "rds_instances": "rdsInstances",
            "system_disk_category": "systemDiskCategory",
            "system_disk_performance_level": "systemDiskPerformanceLevel",
            "tags": "tags",
            "zone_ids": "zoneIds",
        },
    )
    class ScalingGroupProperty:
        def __init__(
            self,
            *,
            instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedKubernetesCluster.DataDisksProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_instances: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tags: typing.Optional[typing.Sequence[typing.Union["RosManagedKubernetesCluster.ScalingGroupTagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param instance_types: 
            :param system_disk_size: 
            :param v_switch_ids: 
            :param data_disks: 
            :param image_id: 
            :param instance_charge_type: 
            :param internet_charge_type: 
            :param internet_max_bandwidth_out: 
            :param is_enterprise_security_group: 
            :param key_pair: 
            :param login_password: 
            :param period: 
            :param period_unit: 
            :param platform: 
            :param rds_instances: 
            :param system_disk_category: 
            :param system_disk_performance_level: 
            :param tags: 
            :param zone_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e4063d3602897a8f6d744ee6fa9af11b7999d255d06c15ba774841ec473dd012)
                check_type(argname="argument instance_types", value=instance_types, expected_type=type_hints["instance_types"])
                check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument data_disks", value=data_disks, expected_type=type_hints["data_disks"])
                check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
                check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
                check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
                check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
                check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
                check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
                check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
                check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
                check_type(argname="argument rds_instances", value=rds_instances, expected_type=type_hints["rds_instances"])
                check_type(argname="argument system_disk_category", value=system_disk_category, expected_type=type_hints["system_disk_category"])
                check_type(argname="argument system_disk_performance_level", value=system_disk_performance_level, expected_type=type_hints["system_disk_performance_level"])
                check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
                check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_types": instance_types,
                "system_disk_size": system_disk_size,
                "v_switch_ids": v_switch_ids,
            }
            if data_disks is not None:
                self._values["data_disks"] = data_disks
            if image_id is not None:
                self._values["image_id"] = image_id
            if instance_charge_type is not None:
                self._values["instance_charge_type"] = instance_charge_type
            if internet_charge_type is not None:
                self._values["internet_charge_type"] = internet_charge_type
            if internet_max_bandwidth_out is not None:
                self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
            if is_enterprise_security_group is not None:
                self._values["is_enterprise_security_group"] = is_enterprise_security_group
            if key_pair is not None:
                self._values["key_pair"] = key_pair
            if login_password is not None:
                self._values["login_password"] = login_password
            if period is not None:
                self._values["period"] = period
            if period_unit is not None:
                self._values["period_unit"] = period_unit
            if platform is not None:
                self._values["platform"] = platform
            if rds_instances is not None:
                self._values["rds_instances"] = rds_instances
            if system_disk_category is not None:
                self._values["system_disk_category"] = system_disk_category
            if system_disk_performance_level is not None:
                self._values["system_disk_performance_level"] = system_disk_performance_level
            if tags is not None:
                self._values["tags"] = tags
            if zone_ids is not None:
                self._values["zone_ids"] = zone_ids

        @builtins.property
        def instance_types(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: instanceTypes: The ECS instance types of the nodes.
            '''
            result = self._values.get("instance_types")
            assert result is not None, "Required property 'instance_types' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def system_disk_size(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: systemDiskSize: The system disk size of a node. Unit: GiB. Valid values: 40 to 500.
            '''
            result = self._values.get("system_disk_size")
            assert result is not None, "Required property 'system_disk_size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: vSwitchIds: The IDs of vSwitches.
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def data_disks(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.DataDisksProperty"]]]]:
            '''
            :Property: dataDisks: The configurations of data disks.
            '''
            result = self._values.get("data_disks")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedKubernetesCluster.DataDisksProperty"]]]], result)

        @builtins.property
        def image_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: imageId: The ID of a custom image. By default, the image provided by ACK is used.
            '''
            result = self._values.get("image_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceChargeType: The billing method of nodes in the node pool. Valid values:
            PrePaid: subscription.
            PostPaid: pay-as-you-go.
            Default value: PostPaid.
            '''
            result = self._values.get("instance_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def internet_charge_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: internetChargeType: Bandwidth billing method. Valid values: PayByTraffic or PayByBandwidth.
            '''
            result = self._values.get("internet_charge_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def internet_max_bandwidth_out(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            internetMaxBandwidthOut: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("internet_max_bandwidth_out")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_enterprise_security_group(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
            This parameter takes effect only if security_group_id is left empty.
            Note You must specify an advanced security group for a cluster that has Terway installed.
            true: creates an advanced security group.
            false: does not create an advanced security group.
            Default value: false.
            '''
            result = self._values.get("is_enterprise_security_group")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key_pair(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPair: The name of the key pair used to log on to the nodes. You must set KeyPair or LoginPassword.
            '''
            result = self._values.get("key_pair")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def login_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: loginPassword: The password used to log on to the nodes by using SSH. You must set KeyPair or LoginPassword. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
            '''
            result = self._values.get("login_password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            period: The subscription period of nodes in the node pool. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If PeriodUnit=Month is configured, the valid values are: 1, 2, 3, 6, and 12.
            Default value: 1.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_unit(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodUnit: The unit of the subscription period of nodes in the node pool. This parameter is required if you set InstanceChargeType to PrePaid. A value of Month specifies that the subscription period is measured in months.
            '''
            result = self._values.get("period_unit")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def platform(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            platform: The release version of the operating system. Valid values:
            CentOS, AliyunLinux, Windows, WindowsCore.
            Default value: AliyunLinux.
            '''
            result = self._values.get("platform")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_instances(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: rdsInstances: The IDs of the ApsaraDB RDS instances.
            '''
            result = self._values.get("rds_instances")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def system_disk_category(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskCategory: The type of system disk. Valid values:
            cloud_efficiency: ultra disk.
            cloud_ssd: standard SSD.
            cloud_essd: enhanced SSD.
            Default value: cloud_efficiency.
            '''
            result = self._values.get("system_disk_category")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def system_disk_performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk. Default value: PL1. Valid values:
            PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.
            PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.
            PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.
            PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
            '''
            result = self._values.get("system_disk_performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tags(
            self,
        ) -> typing.Optional[typing.List["RosManagedKubernetesCluster.ScalingGroupTagsProperty"]]:
            '''
            :Property:

            tags: Adds labels only to ECS instances.
            A key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosManagedKubernetesCluster.ScalingGroupTagsProperty"]], result)

        @builtins.property
        def zone_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: zoneIds: Zone ids of virtual switches belongs to.
            '''
            result = self._values.get("zone_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScalingGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class ScalingGroupTagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__957057612188a2f16751a0b7120dd7f5c50b321ff2076b1e6f13cb14589dbcaf)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScalingGroupTagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__11d21bf57a1f92a026136954ccff19213704570f3c220a3cab477d005a8de393)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TaintsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value", "effect": "effect"},
    )
    class TaintsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            :param effect: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c9b10a2b231b1ce073170209e7e44e0010b4162b40bcf811596ba1eb6a4f66bc)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }
            if effect is not None:
                self._values["effect"] = effect

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            effect: The scheduling policy. Valid values:
            NoSchedule: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
            NoExecute: Pods that do not tolerate this taint are evicted after this taint is added to the node.
            PreferNoSchedule: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
            Default value: NoSchedule.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TaintsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.WorkerDataDisksProperty",
        jsii_struct_bases=[],
        name_mapping={"category": "category", "size": "size"},
    )
    class WorkerDataDisksProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param size: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__22b83b8cb52357d605b3f52df349c2837fcfd76309e855e63ee86500ac9da6fd)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument size", value=size, expected_type=type_hints["size"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "size": size,
            }

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: Data disk type. Value includes:
            cloud: ordinary cloud disk
            cloud_efficiency: efficient cloud disk
            cloud_ssd: SSD cloud disk
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def size(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: size: Data disk size in GiB.
            '''
            result = self._values.get("size")
            assert result is not None, "Required property 'size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WorkerDataDisksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cs.RosManagedKubernetesClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "addons": "addons",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "charge_type": "chargeType",
        "cis_enabled": "cisEnabled",
        "cloud_monitor_flags": "cloudMonitorFlags",
        "cluster_spec": "clusterSpec",
        "container_cidr": "containerCidr",
        "deletion_protection": "deletionProtection",
        "disable_rollback": "disableRollback",
        "encryption_provider_key": "encryptionProviderKey",
        "endpoint_public_access": "endpointPublicAccess",
        "format_disk": "formatDisk",
        "is_enterprise_security_group": "isEnterpriseSecurityGroup",
        "keep_instance_name": "keepInstanceName",
        "key_pair": "keyPair",
        "kubernetes_version": "kubernetesVersion",
        "load_balancer_spec": "loadBalancerSpec",
        "login_password": "loginPassword",
        "node_cidr_mask": "nodeCidrMask",
        "node_name_mode": "nodeNameMode",
        "node_pools": "nodePools",
        "num_of_nodes": "numOfNodes",
        "os_type": "osType",
        "period": "period",
        "period_unit": "periodUnit",
        "platform": "platform",
        "pod_vswitch_ids": "podVswitchIds",
        "proxy_mode": "proxyMode",
        "resource_group_id": "resourceGroupId",
        "runtime": "runtime",
        "security_group_id": "securityGroupId",
        "service_cidr": "serviceCidr",
        "snat_entry": "snatEntry",
        "soc_enabled": "socEnabled",
        "tags": "tags",
        "taint": "taint",
        "timeout_mins": "timeoutMins",
        "user_data": "userData",
        "worker_data_disk": "workerDataDisk",
        "worker_data_disks": "workerDataDisks",
        "worker_instance_types": "workerInstanceTypes",
        "worker_system_disk_category": "workerSystemDiskCategory",
        "worker_system_disk_size": "workerSystemDiskSize",
        "zone_ids": "zoneIds",
    },
)
class RosManagedKubernetesClusterProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_provider_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.NodePoolsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.RuntimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosManagedKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CS::ManagedKubernetesCluster``.

        :param name: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param addons: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param charge_type: 
        :param cis_enabled: 
        :param cloud_monitor_flags: 
        :param cluster_spec: 
        :param container_cidr: 
        :param deletion_protection: 
        :param disable_rollback: 
        :param encryption_provider_key: 
        :param endpoint_public_access: 
        :param format_disk: 
        :param is_enterprise_security_group: 
        :param keep_instance_name: 
        :param key_pair: 
        :param kubernetes_version: 
        :param load_balancer_spec: 
        :param login_password: 
        :param node_cidr_mask: 
        :param node_name_mode: 
        :param node_pools: 
        :param num_of_nodes: 
        :param os_type: 
        :param period: 
        :param period_unit: 
        :param platform: 
        :param pod_vswitch_ids: 
        :param proxy_mode: 
        :param resource_group_id: 
        :param runtime: 
        :param security_group_id: 
        :param service_cidr: 
        :param snat_entry: 
        :param soc_enabled: 
        :param tags: 
        :param taint: 
        :param timeout_mins: 
        :param user_data: 
        :param worker_data_disk: 
        :param worker_data_disks: 
        :param worker_instance_types: 
        :param worker_system_disk_category: 
        :param worker_system_disk_size: 
        :param zone_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3af942109a18ca2f12665b70f8a04871c3c748a6aadc55101831e7fd771e2189)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument addons", value=addons, expected_type=type_hints["addons"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cis_enabled", value=cis_enabled, expected_type=type_hints["cis_enabled"])
            check_type(argname="argument cloud_monitor_flags", value=cloud_monitor_flags, expected_type=type_hints["cloud_monitor_flags"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument container_cidr", value=container_cidr, expected_type=type_hints["container_cidr"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument disable_rollback", value=disable_rollback, expected_type=type_hints["disable_rollback"])
            check_type(argname="argument encryption_provider_key", value=encryption_provider_key, expected_type=type_hints["encryption_provider_key"])
            check_type(argname="argument endpoint_public_access", value=endpoint_public_access, expected_type=type_hints["endpoint_public_access"])
            check_type(argname="argument format_disk", value=format_disk, expected_type=type_hints["format_disk"])
            check_type(argname="argument is_enterprise_security_group", value=is_enterprise_security_group, expected_type=type_hints["is_enterprise_security_group"])
            check_type(argname="argument keep_instance_name", value=keep_instance_name, expected_type=type_hints["keep_instance_name"])
            check_type(argname="argument key_pair", value=key_pair, expected_type=type_hints["key_pair"])
            check_type(argname="argument kubernetes_version", value=kubernetes_version, expected_type=type_hints["kubernetes_version"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument login_password", value=login_password, expected_type=type_hints["login_password"])
            check_type(argname="argument node_cidr_mask", value=node_cidr_mask, expected_type=type_hints["node_cidr_mask"])
            check_type(argname="argument node_name_mode", value=node_name_mode, expected_type=type_hints["node_name_mode"])
            check_type(argname="argument node_pools", value=node_pools, expected_type=type_hints["node_pools"])
            check_type(argname="argument num_of_nodes", value=num_of_nodes, expected_type=type_hints["num_of_nodes"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument platform", value=platform, expected_type=type_hints["platform"])
            check_type(argname="argument pod_vswitch_ids", value=pod_vswitch_ids, expected_type=type_hints["pod_vswitch_ids"])
            check_type(argname="argument proxy_mode", value=proxy_mode, expected_type=type_hints["proxy_mode"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument service_cidr", value=service_cidr, expected_type=type_hints["service_cidr"])
            check_type(argname="argument snat_entry", value=snat_entry, expected_type=type_hints["snat_entry"])
            check_type(argname="argument soc_enabled", value=soc_enabled, expected_type=type_hints["soc_enabled"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument taint", value=taint, expected_type=type_hints["taint"])
            check_type(argname="argument timeout_mins", value=timeout_mins, expected_type=type_hints["timeout_mins"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument worker_data_disk", value=worker_data_disk, expected_type=type_hints["worker_data_disk"])
            check_type(argname="argument worker_data_disks", value=worker_data_disks, expected_type=type_hints["worker_data_disks"])
            check_type(argname="argument worker_instance_types", value=worker_instance_types, expected_type=type_hints["worker_instance_types"])
            check_type(argname="argument worker_system_disk_category", value=worker_system_disk_category, expected_type=type_hints["worker_system_disk_category"])
            check_type(argname="argument worker_system_disk_size", value=worker_system_disk_size, expected_type=type_hints["worker_system_disk_size"])
            check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
        }
        if addons is not None:
            self._values["addons"] = addons
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cis_enabled is not None:
            self._values["cis_enabled"] = cis_enabled
        if cloud_monitor_flags is not None:
            self._values["cloud_monitor_flags"] = cloud_monitor_flags
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if container_cidr is not None:
            self._values["container_cidr"] = container_cidr
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if disable_rollback is not None:
            self._values["disable_rollback"] = disable_rollback
        if encryption_provider_key is not None:
            self._values["encryption_provider_key"] = encryption_provider_key
        if endpoint_public_access is not None:
            self._values["endpoint_public_access"] = endpoint_public_access
        if format_disk is not None:
            self._values["format_disk"] = format_disk
        if is_enterprise_security_group is not None:
            self._values["is_enterprise_security_group"] = is_enterprise_security_group
        if keep_instance_name is not None:
            self._values["keep_instance_name"] = keep_instance_name
        if key_pair is not None:
            self._values["key_pair"] = key_pair
        if kubernetes_version is not None:
            self._values["kubernetes_version"] = kubernetes_version
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if login_password is not None:
            self._values["login_password"] = login_password
        if node_cidr_mask is not None:
            self._values["node_cidr_mask"] = node_cidr_mask
        if node_name_mode is not None:
            self._values["node_name_mode"] = node_name_mode
        if node_pools is not None:
            self._values["node_pools"] = node_pools
        if num_of_nodes is not None:
            self._values["num_of_nodes"] = num_of_nodes
        if os_type is not None:
            self._values["os_type"] = os_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if platform is not None:
            self._values["platform"] = platform
        if pod_vswitch_ids is not None:
            self._values["pod_vswitch_ids"] = pod_vswitch_ids
        if proxy_mode is not None:
            self._values["proxy_mode"] = proxy_mode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if runtime is not None:
            self._values["runtime"] = runtime
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if service_cidr is not None:
            self._values["service_cidr"] = service_cidr
        if snat_entry is not None:
            self._values["snat_entry"] = snat_entry
        if soc_enabled is not None:
            self._values["soc_enabled"] = soc_enabled
        if tags is not None:
            self._values["tags"] = tags
        if taint is not None:
            self._values["taint"] = taint
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins
        if user_data is not None:
            self._values["user_data"] = user_data
        if worker_data_disk is not None:
            self._values["worker_data_disk"] = worker_data_disk
        if worker_data_disks is not None:
            self._values["worker_data_disks"] = worker_data_disks
        if worker_instance_types is not None:
            self._values["worker_instance_types"] = worker_instance_types
        if worker_system_disk_category is not None:
            self._values["worker_system_disk_category"] = worker_system_disk_category
        if worker_system_disk_size is not None:
            self._values["worker_system_disk_size"] = worker_system_disk_size
        if zone_ids is not None:
            self._values["zone_ids"] = zone_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the cluster. The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchIds: The virtual switch ID of the worker node.
        '''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def addons(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]]:
        '''
        :Property:

        addons: A combination of addon plugins for Kubernetes clusters.
        Network plug-in: including Flannel and Terway network plug-ins
        Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        Ingress: The installation of the Ingress component is enabled by default.
        '''
        result = self._values.get("addons")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether the cluster automatically renews. It takes effect when the value of ChargeType is PrePaid. The optional values are:
        true: automatic renewal
        false: do not renew automatically
        Default to true.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required:
        When PeriodUnit = Week, the values are: {"1", "2", "3"}
        When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"}
        Default to 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: cluster payment type. The optional values are:
        PrePaid: prepaid
        PostPaid: Pay as you go
        Default to PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cis_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
        For more information, see CIS reinforcement.
        Valid values:
        true: enables CIS reinforcement.
        false: disables CIS reinforcement.
        Default value: false.
        '''
        result = self._values.get("cis_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_monitor_flags(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudMonitorFlags: Whether to install the cloud monitoring plugin:
        true: indicates installation
        false: Do not install
        Default to false
        '''
        result = self._values.get("cloud_monitor_flags")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: The managed cluster spec. Value:
        ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
        ack.standard: Standard hosting cluster.
        Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def container_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: containerCidr: The container network segment cannot conflict with the VPC network segment. When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        '''
        result = self._values.get("container_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deletionProtection: Specifies whether to enable deletion protection for the cluster.
        After deletion protection is enabled, the cluster cannot be deleted
        in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        false: disables deletion protection for the cluster.
        Default value: false.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_rollback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        disableRollback: Whether the failure was rolled back:
        true: indicates that it fails to roll back
        false: rollback failed
        The default is true. If rollback fails, resources produced during the creation process will be released. False is not recommended.
        '''
        result = self._values.get("disable_rollback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_provider_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
        '''
        result = self._values.get("encryption_provider_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_public_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endpointPublicAccess: Whether to enable the public network API Server:
        true: which means that the public network API Server is open.
        false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        '''
        result = self._values.get("endpoint_public_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def format_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        formatDisk: Specifies whether to mount a data disk to nodes that are created
        on existing Elastic Compute Service (ECS) instances. Valid values:
        true: stores the data of containers and images on a data disk.
        The original data on the disk will be overwritten.
        Back up data before you mount the disk.
        false: does not store the data of containers and images on a data disk.
        Default value: false.
        How to mount a data disk:
        If the ECS instances have data disks mounted and the file system of the last
        data disk is not initialized, the system automatically formats the data disk to ext4.
        Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        The system does not create or mount a new data disk if no data disk has been
        mounted to the ECS instances.
        '''
        result = self._values.get("format_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
        This parameter takes effect only if security_group_id is left empty.
        Note You must specify an advanced security group for a cluster that has Terway installed.
        true: creates an advanced security group.
        false: does not create an advanced security group.
        Default value: false.
        '''
        result = self._values.get("is_enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def keep_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
        true: retains the names.
        false: does not retain the names. The new names are assigned by the system.
        Default value: true.
        '''
        result = self._values.get("keep_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPair: Key pair name. Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("key_pair")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kubernetes_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kubernetesVersion: The version of the Kubernetes cluster.
        '''
        result = self._values.get("kubernetes_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loginPassword: SSH login password. Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        '''
        result = self._values.get("login_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_cidr_mask(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
        This number is determined by the specified pod CIDR block.
        This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        '''
        result = self._values.get("node_cidr_mask")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_name_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.

        - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
        - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
        '''
        result = self._values.get("node_name_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def node_pools(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.NodePoolsProperty]]]]:
        '''
        :Property: nodePools: The configurations of Node pools.
        '''
        result = self._values.get("node_pools")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.NodePoolsProperty]]]], result)

    @builtins.property
    def num_of_nodes(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        numOfNodes: Number of worker nodes. The range is [0,300].
        Default to 3.
        '''
        result = self._values.get("num_of_nodes")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        osType: The type of operating system. Valid values:
        Windows
        Linux
        Default value: Linux.
        '''
        result = self._values.get("os_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The duration of the annual subscription and monthly subscription. It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
        Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: When you specify PrePaid, you need to specify the period. The options are:
        Week: Time is measured in weeks
        Month: time in months
        Year: time in years
        Default to Month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def platform(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        platform: The release version of the operating system. Valid values:
        CentOS
        AliyunLinux
        QbootAliyunLinux
        Qboot
        Windows
        WindowsCore
        Default value: CentOS.
        '''
        result = self._values.get("platform")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pod_vswitch_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        podVswitchIds: The list of pod vSwitches. For each vSwitch that is allocated to nodes,
        you must specify at least one pod vSwitch in the same zone.
        The pod vSwitches cannot be the same as the node vSwitches.
        We recommend that you set the mask length of the CIDR block to a value no
        greater than 19 for the pod vSwitches.
        The pod_vswitch_ids parameter is required when the Terway network
        plug-in is selected for the cluster.
        '''
        result = self._values.get("pod_vswitch_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def proxy_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. The default is iptables.
        '''
        result = self._values.get("proxy_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def runtime(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.RuntimeProperty]]:
        '''
        :Property: runtime: The container runtime of the cluster. The default runtime is Docker.
        '''
        result = self._values.get("runtime")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.RuntimeProperty]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        '''
        result = self._values.get("service_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def snat_entry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        snatEntry: Whether to configure SNAT for the network.
        When a VPC can access the public network environment, set it to false.
        When an existing VPC cannot access the public network environment:
        When set to True, SNAT is configured and the public network environment can be accessed at this time.
        If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        Default to true.
        '''
        result = self._values.get("snat_entry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def soc_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        socEnabled: Valid values:
        true: enables reinforcement based on classified protection.
        false: disables reinforcement based on classified protection.
        Default value: false.
        '''
        result = self._values.get("soc_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosManagedKubernetesCluster.TagsProperty]]:
        '''
        :Property: tags: Tag the cluster.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosManagedKubernetesCluster.TagsProperty]], result)

    @builtins.property
    def taint(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]]:
        '''
        :Property: taint: It is used to mark nodes with taints. It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        '''
        result = self._values.get("taint")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeoutMins: Cluster resource stack creation timeout, in minutes. The default value is 60.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: The user-defined data. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disk(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerDataDisk: Whether to mount the data disk. The options are as follows:
        true: indicates that the worker node mounts data disks.
        false: indicates that the worker node does not mount data disks.
        Default to false.
        '''
        result = self._values.get("worker_data_disk")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_data_disks(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]]:
        '''
        :Property: workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is valid only when the worker node data disk is mounted.
        '''
        result = self._values.get("worker_data_disks")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]], result)

    @builtins.property
    def worker_instance_types(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: workerInstanceTypes: Worker node ECS specification type code. For more details, see Instance Specification Family.
        '''
        result = self._values.get("worker_instance_types")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def worker_system_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskCategory: Worker node system disk type. The value includes:
        cloud_efficiency: efficient cloud disk
        cloud_ssd: SSD cloud disk
        Default to cloud_efficiency.
        '''
        result = self._values.get("worker_system_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def worker_system_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
        Default to 120.
        '''
        result = self._values.get("worker_system_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: zoneIds: Zone ids of worker node virtual switches belongs to.
        '''
        result = self._values.get("zone_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedKubernetesClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AnyCluster",
    "AnyClusterProps",
    "ClusterAddons",
    "ClusterAddonsProps",
    "ClusterApplication",
    "ClusterApplicationProps",
    "ClusterHelmApplication",
    "ClusterHelmApplicationProps",
    "ClusterNodePool",
    "ClusterNodePoolProps",
    "KubernetesCluster",
    "KubernetesClusterProps",
    "ManagedEdgeKubernetesCluster",
    "ManagedEdgeKubernetesClusterProps",
    "ManagedKubernetesCluster",
    "ManagedKubernetesClusterProps",
    "RosAnyCluster",
    "RosAnyClusterProps",
    "RosClusterAddons",
    "RosClusterAddonsProps",
    "RosClusterApplication",
    "RosClusterApplicationProps",
    "RosClusterHelmApplication",
    "RosClusterHelmApplicationProps",
    "RosClusterNodePool",
    "RosClusterNodePoolProps",
    "RosKubernetesCluster",
    "RosKubernetesClusterProps",
    "RosManagedEdgeKubernetesCluster",
    "RosManagedEdgeKubernetesClusterProps",
    "RosManagedKubernetesCluster",
    "RosManagedKubernetesClusterProps",
]

publication.publish()

def _typecheckingstub__ca85d1ea0799d491f8c7fcd460f4fd4d6dce36dba6e9476ea3d0b7593a9bf227(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AnyClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7eeb1f3250765f14389f3dc05fe896a294e5f946c9928a868f0416e2387a177e(
    *,
    cluster_config: typing.Union[typing.Mapping[builtins.str, typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ff3045e3c4aad7341ddba9b56c325f4da896f5c5965b980d1bb61839abb6184(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterAddonsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24a3eac3d743a672c08e6e4b94c9a877f15371deda815baee9cf743427ba8612(
    *,
    addons: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterAddons.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    installed_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__640f1c0c779ccf5b1be22f68ee225c7b308ddeba6d14590f8b3cf361a42392d4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f98845f71d920946dbf907abb8e6b6a1833417acf45d35c4876a7ab195044048(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    yaml_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_namespace_deletion: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b451f869c856f45e7df042627736dfcb76ea6bd0770b7dc6ebd37e6e9623e698(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterHelmApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8521b5c71abb1f0c91a08c8fe1abc80f7d49867c554c0ae70273c559fa49f5ec(
    *,
    chart_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    chart_values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eedee08bc3c96073ed108875d755dcae506a71dd21aad1ae580c9ae0aa8f28e8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterNodePoolProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71e51e7f239a3cd9e134dd378ff3d55bc493c8e3326397f8889705b7295eb76a(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.ScalingGroupProperty, typing.Dict[builtins.str, typing.Any]]],
    auto_scaling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.AutoScalingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.KubernetesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    management: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.ManagementProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.NodePoolInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tee_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.TeeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3667bf80fa8ef6bbc84b7e40e95b20275faf32cac3fec5466c6e0a923642df1e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[KubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c814b20919a31fc84e924e092c3c269fea79729db0b612d29db6fe4f9e1380e6(
    *,
    master_instance_types: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    master_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    worker_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.MasterDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    master_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.NodePoolsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    node_port_range: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.RuntimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssh_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
    timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_ca: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3b2ea5a80aec858c2a8b8da09173d26ead6817ba3c91b198e26bf9fd30cabbd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ManagedEdgeKubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16ec2e4a2fbaec4a0c2e41642791d36f29f0047605f4279b73b1b1a37dc3920d(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    num_of_nodes: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedEdgeKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedEdgeKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    worker_data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8844bec6f7a909ccdfc4f876eea53dd8da4c37e355b074f1d327f15d22fb8045(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ManagedKubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__481e54fb4f6105224ef70cb08c26cdccce792ce83361b0d81e58fcb7bbd264dd(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_provider_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.NodePoolsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.RuntimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
    timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dab907bea47a6ec3baf52eb289e3caa693abfe5bad7dc9aec81ce23631ca5c9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAnyClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d2a046b2958edcdcd3551875e5ca4858ee965b86329d81428def39a4e8f8136(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0a788fd79a1810e88869e7fdd7f33734c47934365f5666a48f4f742fc36d15f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__757adad7affcc45947b642573f1ab3adfb4721f8cce1396b89206317fdc5a89e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bd63c860923eb026d4431981eb0b083754bbb0652d39a9d225d6a9b0ce7e15c(
    *,
    cluster_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c196e9a9bb7e29fd3771692b745d228dbfdcaa17ad387ce4608e5dbd961872d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterAddonsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6aa87c0412e1363fda02873407ff51f780b40bddf383b2a771b5f82ce94510af(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30031fa71b75ddae2d5c8e3e8b8442b1b02ea8c9ef0d2a97adf76f344d96ed74(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterAddons.AddonsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc6ab783a3e3904bdb1b2674e008a7308658e06507e5a8aafa198f48843bc6a0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3534d2cfc33c80f2354baad6d63d20eab8c74037b939ebc27d75028a749b16b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d30f9ede1c0b035fef80c1621df85aa8fc18a3dce2e56aedb02692989e989bc(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73c915ff23bf683ca90c57fdb97659340c726a16def1bb60b848137b1e41ff15(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e71905304a1f62cfde3534785b8fb57373b257dd535c78f0128c3a90261cf180(
    *,
    addons: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterAddons.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    installed_ignore: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f10e1b4758aeb6edbb5b5510f8a9d0760ff7ad9febc83aef1e6a8b7a0ffcd1e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__921e69b7574e9ec287e18d8e9332f3530cdaa83ed220831210f3304bc3bb58a0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398708490ac47e4ed19c072bb55de06e1ecf0d932a7c90b5946ef1d3889bc785(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__645eeb4fd739d20331ecb33cf69d997cb19ab5581426ef7473aa7162173f4eda(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c93c100813daad4739c32d96834ab6f92889d8debd2367a7f0c9489cc7bad06(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67652a034020861ff17950dd1f62e9b0ad959d5f9fa80091a0c1d3fbd49ae738(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37a3afd3ec90f55665183df627deea7a0f884bb809b9ca0b01069a01d4ed5e3e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c82b4c70a819d49225a45b77f22e192bf65eb6c3fef95a2a3550815719e827d6(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    yaml_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    default_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_namespace_deletion: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ae2fb0e664c2762063eda49634af1a4c209ac3038af9e6033801f14fcda1af9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterHelmApplicationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c3f22975bb945e0e8feec0432b398ad0b689e4c623c657f787e11a562bf7a47(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e58d99024ffdb3a0c34f9f241bf2be88506da14cec0137292a5fa5ace562731(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11f7a2f39efb48eb2cf585dd957782798c0a9fe912181983e1bbdcecb66534e6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdfef686b265cc21bf774d2c634b476e20a171716f9c4dc93d890dbf99df4e34(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4734ba1fa926beb63a0432efd860a8e1f2e2ee10e03d230d4e6f8d0455088bc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02bda6f5d73348d423f1bc997b28acea0f672edcc0cae4f634191a633ec9a186(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18f7ff2bc71c763ae468698b2dda901c7c791883ea4beab4eead60c3676d98ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bddbc4b64cb63cd7b0fa6c60c81fcd403633475d0d675512964417160745be7e(
    *,
    chart_url: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    chart_values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ca24c50cc7fd4f89982a27ed196938c5766b14d0b113383bd87166e6e26966a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterNodePoolProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08e51cb9deed25e84d4f14a9cd7a200743cdf17b8ffd67d667946cdf950495df(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d85cdf50d60c737695d01fbdf3eca02609428448fd4bc8287b671bbfbafe5d80(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f96127a99e566a5fa9a977ab820214a9544a1e7379c107002a80eb348c9fa1f1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88cefc77691983e1e50c2af8d8cf5bfcf040903aa48b5cf6b19afb5bd154f4d7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.ScalingGroupProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f6b4ae625291255410ccfc16c47490ae91fffd37cc79f0dad96853ed01d6e23(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.AutoScalingProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__808413693691c67ad74e570d45e7c373ecf0a93804a4e07b49e1350f0b150ff6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7135c9883d4f42018506d40d18eb052747b5cb34458fc53760abc49a5c20ddeb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.KubernetesConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5896bcfaf917431f105306b7d77572d6d8a4dd293ff7d2598973a79245a2b908(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.ManagementProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__516647734faded52d7ca05e0bd10b848cdf65347cba7ee7f7c8267b183c4b96c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.NodePoolInfoProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42c9e6874930661a8b42bb866c5e65b063ca694597734d7ed31414802203bf4b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosClusterNodePool.TeeConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c59e32bffc02ef2148365bf4be738901a5ec1a809ffcb1794ddbf27118f77e5a(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    eip_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_bond_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_instances: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_instances: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8ec4890917e0971dc00a27f4fc38ae7d540b339f33700ca07ee9b639479c4e8(
    *,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4be0c709b7ed0877e7f1383b82eefd218d59d305e16d29162b3d05941a69716(
    *,
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cms_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    taints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.TaintsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    unschedulable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da2682595e5971eedcc15fa084f15d65d19bf50e18f414da7673251c96248255(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d297be281daaba8869528b393efe9c01c4b6e57f63cb84d3e705392c82b29f1(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    auto_repair: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    upgrade_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.UpgradeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6a2ccd1ab80c199b421cf0fba633bd53cc095ed6c602e9b4e0c869c5d2a31c4(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a20fc45a77d5665db88eb31dbe489d41b2df733ca8327505e041dd3465ff18bb(
    *,
    instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compensate_with_on_demand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_az_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    on_demand_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    on_demand_percentage_above_base_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_instances: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_instance_pools: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_instance_remedy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.SpotPriceLimitProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosClusterNodePool.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b96194e014d63ed5bc9a2534c9932f444cf31db4220d2fe04f86e7546b0276e9(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    price_limit: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__212808b3c07cdd8430bf9fc683f605246f49e9155ce226f12686ea7702d2d775(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4f368270a6db3c1eb058699e6c1d9fb5421e7385365bf0195da28285d6143d4(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a00a0ac8e0314c17350cff410fcac5316e458cb5efac24d241c185a9073ff5d4(
    *,
    tee_enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64032cec75b5244006c19ce93975c32f2d3fb851ab1e189ade69c63542f1849b(
    *,
    auto_upgrade: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_unavailable: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    surge: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    surge_percentage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93680a9c82a6fb91f61e68468734dd320625b47f84fb8452770ad5f7149a5c9c(
    *,
    cluster_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.ScalingGroupProperty, typing.Dict[builtins.str, typing.Any]]],
    auto_scaling: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.AutoScalingProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.KubernetesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    management: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.ManagementProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.NodePoolInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tee_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosClusterNodePool.TeeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b6114c13f9f770b15eee9d0b58a68987fcc5ba60bb23224bddcc201e65cbeb3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__548ecf25b1fc6c4ea591a50431fbdab2fef443eb1daf6b31c5efea4da4369e16(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d3ab1980980e08e64673d2aef73c49313faa82b33410bf1e251fd5aea777d90(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd1f203396b1a633a4ccb51e4b0e549395aa7fba3ef15c9bf3e712951a2b09f5(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32f4d5751a8080f9a8a0280e140e05e191a3a50f2ac5acd0f01c8240b1071ec3(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__591e358e0200c518f1d714ec2749f1de27b6adb233ccc564e3ed4221b9343dd5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27cdf9f8d0e0976a081d59b5e7f6ae6b7dd0b27dee08824038de61091cf09b31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0094153dff8097adbe5f33a639fa208771012876670483c56f5cd2537c7424cc(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feadaf31a8f989adeed466742f9760e712f5cda477e9b99a342b38f516f9e8c5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.AddonsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67b8e6c6137f013165dc62d830b7c921a467fdb9185277d8cf78fd722fb1311f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf98face9e07e3bf91b148f2cc9cc3e192eaf5928b38fb3a8230c14c7615b95d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86cde05c1dcdd80f30fbef4764f1385a91e4e31da1b3d0163f9ee79b98704012(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a3bed9d47fe85141de945bf42a0423a72dee994e640ea97df7bcc39b0dbf31f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b25730ea2d9c11ca79ec2ddc73d588552823b52e122bbb978ec89a28d056039f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb4972ce1bca8db2981d4127c6bf954b16eed359a08318a9a8f0374f1452a92a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85f438f7b8d867e354c728516fae5773abeb57894dfa6b4478586441cae760b1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3bdbf2882d7238612745ac9d62f61559ae34bf2f44b1c9a348a30d3c5325ee2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff1479c359dfdf65007258c4818cb4b73c1231a70eac5e1cb30ac6e8a7b5fae8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d73bba4507b51d66fae9d3f115e3a1719f3a94f88de57b753250fc3aa426703(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0801e9fc9816c1babcffbb14274acfce3b732381002073cd7f6c020a211c530d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8494d0d17c59655fdd61d7882ed9755eed8e4c555f51cf5b87547575e6b16546(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b7f83ba8b90933cf5ed2e76b396be6f315c217e579d17ce8f14db2e6add7528(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a754aebed12c13c801ad1a8baae4734e3e1d04a3e49b6fbbb93dd3f547760b1f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4a4f923cdf8a07b05dc2da741d1e5ab08890798440ca7ae64784e9f1cf569df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bce9b7a500433eec746e5a5c5eed6262671a9667e9886e8b939a22f91f2a3c4d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9a666a1d4822cda0bd1cec01e839617e58b9a1e46507d813e68f2df5d81e09b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f28bedf94fe3a142071fcf98cd4ed749b70ab47a912213f9c2b271397a6cc665(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d809cd7503813225fef8ebeaaa66656fbee499995f5f080eccd996ffe79a5966(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2d072577beae8e6108e290bf45b66de42634a9a9aa131179cc1d425461893f9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.MasterDataDisksProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__672f83fbe60a7fef723686d91fc81d4017bb912b3ecaa03d36b7ffa00255205c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__587f37d0aa8f651bac727277e6372a0a6ea19bb69c464776f087fd157ba7c11d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23dcfa5736cc32cb1b401057c92ffd3126b2c4dc7e9b7bd1a8117865cebf3e67(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3093da54d19d791eb59f3519ccfc162b0308427e2a581175faac2f3fa305002a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8afbbf8f27588bdd7c9eef0eef8cde10e7499b8ed4d0dd10030d2afd1ac26cf9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__396be76fab2946087210ab7629beb6f998e668aea8969493e493cc54379d0f9f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__285a09f64698b4db9b6d4efbecc09fb8a780a5ea29ecf95a97f3022eff957724(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee2acb27161166096dbed2949d4a57910e5c001079e3ef1043951c307a5bd382(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.NodePoolsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4bd942bc227f23aacc5a23725e1e172fa120d1d9e4280eb372ec8e5399641c9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4898418dbe1cd63bb860b3836e634a1a42be49c12187f81b1053c90f7e0086f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afebc825685dee22c2123c67a59005071ad92c747b0083dd7604b91c08411fbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ba55ee1240c75fd7b03e0cc11f4e2a5125dda20d0578dbf41e29a417e2fbea1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__437c23683d1e06aef7d0735df3fad8c0e441c5c7d8003fef35bad88df3ca973b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad2651a716fe6c0cba21ad5f6f065e1f6fa25d03c59197bd0ad60b69c3ff5373(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fb9b5c8e47892d4e09b9fa3fc6164aab71f9ddea583e332b965f9274beac94f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__507dc2d2a6b2bcd73f2a41f1670d66515fc6f39fe2194b6fe080d3bb057ea1a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9282bbcdb0addd2526d385d643c23236eb3678accf596245cb2a15d88c85ece7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc259dc683a7b502341259dacde0915942e031d6987297f22dfb41238d8824a3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.RuntimeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7468fb5706df8688ba1b04685ae3a4e823ab02639e78f823bdf72a4aae801938(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31e616a98467d8a7f5a5920f68fa5fcad8889cd19d37994c3c4f86fc108c7c38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0153111591dedcc877ad5d586f9617201e4310e96ec7ec4d25134cc952481061(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bea6130a84e1ea3cfab37785aeb83b3ef944651e8248893464afe786fcaeb55(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96e89693139a0ae0c5811086abb30c0062d9964eba92a1318d6d384f9bd17ef5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a59c07ba55203181512d2457f764a261cdce1d25eb6190e322f23c8cd664e19(
    value: typing.Optional[typing.List[RosKubernetesCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46cd4a69121d4677a2a7e5e8f213344ae0532158c6ea2ab2b04c044edb53db6c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c59adfbc2858cfec85a077c45b21c2d00d1c916c645e7e7d317a5cff1e34ab2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__629efaff72275decba3980eb14b53d8ce936acc53dbd3a06cd916744992ec828(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__735d80e3a2de7995ddd0151a5d629aac8255ed5bfcffa2ffd01e8214554968c9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98483d15d5ba44099767c82496fb904627e0d6f93c841d5bd8fa1fa8c7ce2c5e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecc2a49abed7df2d9b1177d081235340de60203a30c60514bd8e437f88359051(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__846086f4adb04e5bd4307de92946fdc48aca0095c67f7aac2d54d99298b65da6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosKubernetesCluster.WorkerDataDisksProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ba27e54ca5f07bb02e96b5f97c1d17235be2473d4d16345bf729e70ba343ccb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd0f6033e1020f12d4b79ac1b90e2054674ff2912a32c0383391577442e5413d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24cdafd13f1891366abbc6e32ecc42598d14498c145d674ca78ca97a91040f16(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0ec3efa66ca37192216be0ad73d80d488bb7dff5316fabac011e70fe1ceb5d6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ee2467d085ae481dfe137e3bd456f0011e2f2155b445b187d56696d99db15e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7616708e01afe58f407950b0def282077e783040aeed9638afd82d824708e825(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e8409797cf3bf4b6a8c11a793ee1ae631a0146e14e5b53191f35bcd0218959b(
    *,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f348519a4adb94f9bd0158ac3a2cdec1e59ddc6485fbd583db5d4ec89c6494bd(
    *,
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    taints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.TaintsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2170a50994b498ce3bd38e264d4027399948650bdaea0870172d1de0f42dfecd(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f82b89c036366c8824abbeb4b8c8e99582eb56d31ed8dcac3132b2347f7d1d1f(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35ea6abc5402573bb0f628528fd8cb005a1c356e7e67f5557d482283f61bdb8c(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00f8eed12aacd62d921b941b7cc087e744582c87b9afe88d27ca8ed2f5887e4f(
    *,
    scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.ScalingGroupProperty, typing.Dict[builtins.str, typing.Any]]],
    count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.KubernetesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.NodePoolInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1628d1605b44e26f291bdf72d2d3aa41a599f93f8131991c106e9d77d3a1c9a6(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87b13d50f700a9e33391a71e2db0544dd8c7255c5342f7eb6d26716d0c964b00(
    *,
    instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_instances: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosKubernetesCluster.ScalingGroupTagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d06c8521de23e4c555ff67693936acbea26f3ffa4214bf16753a80e7965ba2c4(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39082e7e32411005fd76b2abbcc43efe07560f01d0eac3e884b629b6232183fd(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40fcc900474b41dc5d8678db9088b8c88603978a9ff878493bea4276991b398e(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9daf9892d7d4f910ad7cbba8a11a5487ba06c931089b10c345f5727ffc24bdfe(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6979aed7b14f39598dd4a9bfc17ef34f6561e6a96d23226110864cdb40c9135c(
    *,
    master_instance_types: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    master_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    worker_v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.MasterDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    master_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.NodePoolsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    node_port_range: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.RuntimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ssh_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
    timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_ca: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8430a012b9ef782603813835c54b2ce9251c32f0f66644361d314adebd686f1f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosManagedEdgeKubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c85b383dec176482467917d687f3fd4f44f3c0731144a2303d76e89f537fdd7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8070bea54d91a21e17f5dd1ffd18c8805f8e600ed8f862caf4fa789911f9737c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c06a53a845b55082f3427661623ab7b98741e7d63b04bf7e4c82c644089dccd7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79bbb839bdad642d4cea0181e2524bdd85c06731f31009deeb5770a7e50bb080(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d23794e8834f60b4b8a6612c075c18401a89a3197dce645d433cb1f9a09a1ddf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedEdgeKubernetesCluster.AddonsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__879a8b32ce71b9ab3f9bea3e364e89226088204e24246716eaa11626447558e8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87e8b8f8472803cc87ead52d7b55142be23a555dd21d7e87cf2f156df699363f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68c4879321d0a0d1bb0a75380e6f8b897eb5a79d84f4bacb11715aa0beb53b65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db6de90b489ac3f57bbc8d5f96ac235bfbbc4495fc0c8e8be98b7d65508f9f73(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__960c0f25711e7afca2028595f29f7a6d92b0acdbe7297e303f056b57cc8bcfcc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2174ce6b92f1e370b708958051827e54a838b546c5385451098ceb7ccb3d02f3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f8bc8e21ab04daaba82ed296f88f759f08a1c22ac76c60e9305a9398da01c3e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c344e464873c36da4578a6c9b65ae1f451f8679e2d73eba52489ac534f0869d0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0564328c30fd0d450a1eb1fc679d57732c2c3d49582c5f46e7a44d7302213e27(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d92d511b1f45a9928323a39d2389b64050788199e8c1a29ea63d429878bca9be(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b091ae05d7cfcba3b579d9a580a7a5d1529340a4bad81bc4011d86366b878368(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05fef4b649fec8346945319324ca65f1cf85d5ccbb172903dc5a6c109db183d5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa94cc942d87e2e7d8af1767b53e866ed6a480e35e5ff3c2fb2fc09f18984c19(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4b8c44509857f97fdc799b4ba47b7ea2e2ac251cb02140e5a96d858393a2f1a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c2ff65bc65f1c560b0c830a8e1f7caca4b553688db176c50b4e0a130d7dc57d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36bba90c300371d3e37c020f4cdd10bc78f2ec210c4ee0d72a02279a1c0359e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3730f0cebdd46586796a3057acabf1c6cdac1bf00c36becfdd25daa2690cab6c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d0ef4699c9727bdd4ca2bd61d964691f5d8d38fc734901de6f4a0ff0a5b5841(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de291af58c6be589d4e56d2fa677300d104e1a7db3a7d8def8dda9ee9ff4aae3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__487c7879a5c73cbab6f421374bc8191f0bc7aebc1d1083fefdf4f36d7ab39652(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ed543943514adeed0a586caf14b71e13687d2ac259e3e45b86d95370630335e(
    value: typing.Optional[typing.List[RosManagedEdgeKubernetesCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__153c00f81cd166902bc4cab4ad2ce420bf16a5b846811d27e6fc0ef5c278d893(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd41a6e1564a75fef5c152741881954a023b2bfaeaab48ae159072b876458dfc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0b7bcac5eed4ecb0da075c98d2d1c40b86bf6fbef018eeef63d60c65639e90b(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7eca764f271df8e7566ef1b5ca37eaade9c6d38a55f3f7c1ee8380a8185be30b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad9dfe7863c8207e3f6f9cbc25acf5c3bbbda0e402f73d50593d95fd52e9b67f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91d2f4cbf1a7e7e0afa63df565e58ca9f48248ea39d31265fd88fd74147ddae9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a174afd0771d04db365e47cde49a3f2b1b74ac51d3006c486ff9f817595a80b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19f791204c2b9d0d86a8036a97e5514e5dc2ad9d3a55e01f447a43065cdeeecd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49989d9400fee96d2e937e812ba9bfa5fcbbc7146c8240a7c24448c7f1c78702(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be217cf9a87a4cb9c9b733d8117ba74a3d519c403bc77c74f3f0a86565c3c62b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__614556afc7474df5007b41a638a656676312119ad378a36852f802bbcb4b987d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3e064df0beffeaa0da2cbb78f29cc5eb6d58610abcdf4e35fcaa4c27220c506(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f465bdcd12340b103327cdbc977ad30ea04aeaa9472d47e4614316bd58451329(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14a64ca8c41a1799485f941b6c32244f32b933a5cbd4666b7430cdffb1cc353d(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34fbd37b9e98c57ae112bd4fd9e53d814f39b7b1905afd1dea27340b40d29dd5(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    num_of_nodes: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedEdgeKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    profile: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedEdgeKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    worker_data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e53cb9c0deab8e984f886372f70768456a750b1eb49330f025c92e79def95379(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosManagedKubernetesClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e671d5e7ca37c92d2b4aca6c70074fcce458ac66f9bb8078aec26cbc3187611c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__980e7a1073a4040963757a0287a1630b7e9a19c96935fcbd2871bd7ea3277acc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7f92507332f2bea0b39b97dd59f4d539cc0372dfae87873ddca55ace7214454(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f40e9cbd2752f9108ef7a29bf19739205577baa49fd015a1359c737c22b36111(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60b8b268d8a990d81977d1a447698eca2f7dd6d067e69e0876b875def10f5cf8(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9346c99111b30d7a00f1440075f405bd7bd73a7b742ed8d95b53c3c4fef0c32b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.AddonsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__454dbc4684a92376d4e5d9cfc45ba813fabba6b8c26a26a5ba518abd0290e93f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea3d3347761102b155fd18058cd05d418e73285b26f879a5cdea667b04af2232(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45e9d09ae224e09e6bfec5b41e283aafc7e4e52714e2b29417303a20ef571460(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af87f057867aca509d6d30338909cca566a284e52d51974ac2d2688862be49af(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88a503bdda6a73717f199d1608aea3887b32b66dd52fa894f1971ab4d01848e3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4096d95fee275524ec3bb73727fd1b562493b0ee896727894fb4b80ead72e6df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0797507578b56141319a08322bc1c9bd4616b0b23bf36bed37687ae5fe13053(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d84ba179941043050ebfdda52fac753686d34233380b53fad93153b8f02bf13(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e5febd542306e44827d87a8e0245f3c45e9a1bcbc788231ad4ce54e5a6ac669(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__088b17f097263ba0820844821a5b5bdcdbb33090b99338db75f5e44275a505db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dfa6d3d6fe881be96fb6354301e3b04914afa2b6b92fa95f1dd3533d2696257(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad5ab0c5245ac2b690eb22161a541b9fd949d99f7d516c80665be46f3f6d0195(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecf32f98f256d01ecd30bfcee2361de154b4099e4f5237d2ce34858fdc1b354c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00c48c19bf67dae9219535c7fd6b70e3fc020e757248d64e231c2c5d04b58bfc(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6e15d01fd9b80f839ef4ae89f7b69f5e12080376539771ae09019888f825642(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__274ea41b99e04e10f7b5e4fd9ebffa9de33c9bfebf96ab0611d70e8726a19463(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9d1336b8cc8caa24bb400f3b35faff51a136912c1a2f60b3aac6a6c8e785bab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b743b51eb1be02175ec474acf75b1240f531b9d99cc835cbcc1173b51acc1364(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f284e8adc146407b3bdd556a4a131568b28d7c7f89acecb8ece16e072fc889e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d53a9855f98ddcf2080b9ce3175149dbbfc6fe260811778845f3043478c1bd31(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07e8a13838709b62fec56a790a5aa4e515d01858dec1152a084ef7395f238c31(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.NodePoolsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d25c0ef303b8f7729371435106a6b50fb4aef478b9f9f4d3ec98292705f4f9e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0ad67ca7ea0665613c0c34be5712087b8ec95f7bb25beb088db7df9f1149305(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcdd424086e33ba641494f18533882ac53c285a85be8837b64ffb3c24c537691(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47ebce8d25f1f0f24d7eaebb04fc89ba1fcc8339ab54a615689d2bc3dce5638a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b39f2bc7ab2b0a10b6f392b35e47e8140217f445d000ad3ec445192fc7443a65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8731a447318d1309d5b96f42024dd7f2bca54788cf1b602612aad0eb1bc1a2aa(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34eea052513715c7f0f36321c8b20a0a33d286b454edca6a8b22d8952190fff3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91c02c46a2eafe0f6169683940870098b6257cfd4f5790b4b1a101251a808754(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__120868c11b816b248923a0cd423546ecdbf31b75a45d0b27583e76490995a912(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.RuntimeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a5768174480726a40346105966b7f78fa630b0b450d8fc83a6537c678ea5ce4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e434516408346d4d5066e68fe7577a813989639f1c3e6e2f03ecce419b7097cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a12e98c0e093ee527989ca7f40562efaa70c61d91e79a2dba0b1c792dc90953(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4f9c4a6de6c7323aed73d6b24f1224faf540457583ffd8cd927a47f1a358c63(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80a298c038dfb84e8986d7cf61cb110129c650f1047d3aa0499a18031bf860d1(
    value: typing.Optional[typing.List[RosManagedKubernetesCluster.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4e352f03bd9d575261ec2743421fa8ddc1f74ef57d4651f71bba17d20c51779(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bd691f8d35ec55da8750e5b65e31e645507da60ce455e185f771a2b38bacaa5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3172447efbd54877b7d3350bd789363c1701268f0e8c6a0f27f5f72b62b0265(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e6906fea24db6896120daf1139e2e16fa11aadd25fa49e0d3af31c9212ec5d3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ba0924a71faac826048c08e6f4ce0d603e15cd161719fc0d5c4f94896fa2b51(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedKubernetesCluster.WorkerDataDisksProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__234d6b3d667544f902dafdfac36af861a030d694a25441154da81d8951cf7c6e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f4a3b4023566a6b1932c058023b379fe1f6032c9f1ec53b839cce4c88b1a7c9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05439ca2a09a2374c5e0eb12ef7083658aafb36a13570721f4f6be7a3767e4ce(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7879397aeae50845a131b7b351b6acc619f36519f7028734428e9bbf69349834(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bef9a81aa531b53eac68765d614f6fb5d8ac37ec58d325c00bb0d227f17fc69(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__774332cc8660f2df0388a3aec9b9a812ebf0057bf2eaf9a92798be57fd4034c3(
    *,
    auto_snapshot_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaaf0eeda722a1cdc856abbe3f3874fcdedc33790505038d88ddf9f03cb2f955(
    *,
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cpu_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    taints: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.TaintsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6cde52040da59e44617b27f2ea21aef7e290f1e733469ab418165ab8d9e74d0(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bd6183748a3ae1bf852454c96cf2b1c54f4d661686dde282e2ef93162081bd0(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1efcdc61d65575f08e7cc548e7968c70d05e7abb2c10daeacf321a87bb85eb0(
    *,
    scaling_group: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.ScalingGroupProperty, typing.Dict[builtins.str, typing.Any]]],
    count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.KubernetesConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    node_pool_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.NodePoolInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03777fb9c01e5955d6fd74fdcd1780d393eb9a9d6e35b6a4e880d2f381ace9eb(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4063d3602897a8f6d744ee6fa9af11b7999d255d06c15ba774841ec473dd012(
    *,
    instance_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.DataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_instances: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedKubernetesCluster.ScalingGroupTagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__957057612188a2f16751a0b7120dd7f5c50b321ff2076b1e6f13cb14589dbcaf(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11d21bf57a1f92a026136954ccff19213704570f3c220a3cab477d005a8de393(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9b10a2b231b1ce073170209e7e44e0010b4162b40bcf811596ba1eb6a4f66bc(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22b83b8cb52357d605b3f52df349c2837fcfd76309e855e63ee86500ac9da6fd(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3af942109a18ca2f12665b70f8a04871c3c748a6aadc55101831e7fd771e2189(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    addons: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.AddonsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cis_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_monitor_flags: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    container_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_rollback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_provider_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_public_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    format_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keep_instance_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kubernetes_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_cidr_mask: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_name_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    node_pools: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.NodePoolsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    num_of_nodes: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    platform: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pod_vswitch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    proxy_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    runtime: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.RuntimeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    snat_entry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    soc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosManagedKubernetesCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    taint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]]] = None,
    timeout_mins: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disk: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_data_disks: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedKubernetesCluster.WorkerDataDisksProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    worker_instance_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    worker_system_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    worker_system_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
