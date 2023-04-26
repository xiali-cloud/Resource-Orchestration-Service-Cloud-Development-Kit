package com.aliyun.ros.cdk.lindorm;

/**
 * Properties for defining a `ALIYUN::Lindorm::MultiZoneInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:20.207Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.RosMultiZoneInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosMultiZoneInstanceProps.Jsii$Proxy.class)
public interface RosMultiZoneInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArbiterVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArbiterZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColdStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCoreSingleStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCoreSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilestoreNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilestoreSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLindormNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLindormSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogSingleStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiZoneCombination() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSolrNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSolrSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStreamNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStreamSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTsdbNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTsdbSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMultiZoneInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMultiZoneInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMultiZoneInstanceProps> {
        java.lang.Object diskCategory;
        java.lang.Object instanceName;
        java.lang.Object vpcId;
        java.lang.Object arbiterVSwitchId;
        java.lang.Object arbiterZoneId;
        java.lang.Object coldStorage;
        java.lang.Object coreSingleStorage;
        java.lang.Object coreSpec;
        java.lang.Object filestoreNum;
        java.lang.Object filestoreSpec;
        java.lang.Object instanceChargeType;
        java.lang.Object lindormNum;
        java.lang.Object lindormSpec;
        java.lang.Object logDiskCategory;
        java.lang.Object logNum;
        java.lang.Object logSingleStorage;
        java.lang.Object logSpec;
        java.lang.Object multiZoneCombination;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object primaryVSwitchId;
        java.lang.Object primaryZoneId;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.lang.Object solrNum;
        java.lang.Object solrSpec;
        java.lang.Object standbyVSwitchId;
        java.lang.Object standbyZoneId;
        java.lang.Object streamNum;
        java.lang.Object streamSpec;
        java.lang.Object tsdbNum;
        java.lang.Object tsdbSpec;

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getDiskCategory}
         * @param diskCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskCategory(java.lang.String diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getDiskCategory}
         * @param diskCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder diskCategory(com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getArbiterVSwitchId}
         * @param arbiterVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder arbiterVSwitchId(java.lang.String arbiterVSwitchId) {
            this.arbiterVSwitchId = arbiterVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getArbiterVSwitchId}
         * @param arbiterVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder arbiterVSwitchId(com.aliyun.ros.cdk.core.IResolvable arbiterVSwitchId) {
            this.arbiterVSwitchId = arbiterVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getArbiterZoneId}
         * @param arbiterZoneId the value to be set.
         * @return {@code this}
         */
        public Builder arbiterZoneId(java.lang.String arbiterZoneId) {
            this.arbiterZoneId = arbiterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getArbiterZoneId}
         * @param arbiterZoneId the value to be set.
         * @return {@code this}
         */
        public Builder arbiterZoneId(com.aliyun.ros.cdk.core.IResolvable arbiterZoneId) {
            this.arbiterZoneId = arbiterZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getColdStorage}
         * @param coldStorage the value to be set.
         * @return {@code this}
         */
        public Builder coldStorage(java.lang.Number coldStorage) {
            this.coldStorage = coldStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getColdStorage}
         * @param coldStorage the value to be set.
         * @return {@code this}
         */
        public Builder coldStorage(com.aliyun.ros.cdk.core.IResolvable coldStorage) {
            this.coldStorage = coldStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getCoreSingleStorage}
         * @param coreSingleStorage the value to be set.
         * @return {@code this}
         */
        public Builder coreSingleStorage(java.lang.Number coreSingleStorage) {
            this.coreSingleStorage = coreSingleStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getCoreSingleStorage}
         * @param coreSingleStorage the value to be set.
         * @return {@code this}
         */
        public Builder coreSingleStorage(com.aliyun.ros.cdk.core.IResolvable coreSingleStorage) {
            this.coreSingleStorage = coreSingleStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getCoreSpec}
         * @param coreSpec the value to be set.
         * @return {@code this}
         */
        public Builder coreSpec(java.lang.String coreSpec) {
            this.coreSpec = coreSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getCoreSpec}
         * @param coreSpec the value to be set.
         * @return {@code this}
         */
        public Builder coreSpec(com.aliyun.ros.cdk.core.IResolvable coreSpec) {
            this.coreSpec = coreSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getFilestoreNum}
         * @param filestoreNum the value to be set.
         * @return {@code this}
         */
        public Builder filestoreNum(java.lang.Number filestoreNum) {
            this.filestoreNum = filestoreNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getFilestoreNum}
         * @param filestoreNum the value to be set.
         * @return {@code this}
         */
        public Builder filestoreNum(com.aliyun.ros.cdk.core.IResolvable filestoreNum) {
            this.filestoreNum = filestoreNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getFilestoreSpec}
         * @param filestoreSpec the value to be set.
         * @return {@code this}
         */
        public Builder filestoreSpec(java.lang.String filestoreSpec) {
            this.filestoreSpec = filestoreSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getFilestoreSpec}
         * @param filestoreSpec the value to be set.
         * @return {@code this}
         */
        public Builder filestoreSpec(com.aliyun.ros.cdk.core.IResolvable filestoreSpec) {
            this.filestoreSpec = filestoreSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLindormNum}
         * @param lindormNum the value to be set.
         * @return {@code this}
         */
        public Builder lindormNum(java.lang.Number lindormNum) {
            this.lindormNum = lindormNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLindormNum}
         * @param lindormNum the value to be set.
         * @return {@code this}
         */
        public Builder lindormNum(com.aliyun.ros.cdk.core.IResolvable lindormNum) {
            this.lindormNum = lindormNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLindormSpec}
         * @param lindormSpec the value to be set.
         * @return {@code this}
         */
        public Builder lindormSpec(java.lang.String lindormSpec) {
            this.lindormSpec = lindormSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLindormSpec}
         * @param lindormSpec the value to be set.
         * @return {@code this}
         */
        public Builder lindormSpec(com.aliyun.ros.cdk.core.IResolvable lindormSpec) {
            this.lindormSpec = lindormSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogDiskCategory}
         * @param logDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder logDiskCategory(java.lang.String logDiskCategory) {
            this.logDiskCategory = logDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogDiskCategory}
         * @param logDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder logDiskCategory(com.aliyun.ros.cdk.core.IResolvable logDiskCategory) {
            this.logDiskCategory = logDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogNum}
         * @param logNum the value to be set.
         * @return {@code this}
         */
        public Builder logNum(java.lang.Number logNum) {
            this.logNum = logNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogNum}
         * @param logNum the value to be set.
         * @return {@code this}
         */
        public Builder logNum(com.aliyun.ros.cdk.core.IResolvable logNum) {
            this.logNum = logNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogSingleStorage}
         * @param logSingleStorage the value to be set.
         * @return {@code this}
         */
        public Builder logSingleStorage(java.lang.Number logSingleStorage) {
            this.logSingleStorage = logSingleStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogSingleStorage}
         * @param logSingleStorage the value to be set.
         * @return {@code this}
         */
        public Builder logSingleStorage(com.aliyun.ros.cdk.core.IResolvable logSingleStorage) {
            this.logSingleStorage = logSingleStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogSpec}
         * @param logSpec the value to be set.
         * @return {@code this}
         */
        public Builder logSpec(java.lang.String logSpec) {
            this.logSpec = logSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getLogSpec}
         * @param logSpec the value to be set.
         * @return {@code this}
         */
        public Builder logSpec(com.aliyun.ros.cdk.core.IResolvable logSpec) {
            this.logSpec = logSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getMultiZoneCombination}
         * @param multiZoneCombination the value to be set.
         * @return {@code this}
         */
        public Builder multiZoneCombination(java.lang.String multiZoneCombination) {
            this.multiZoneCombination = multiZoneCombination;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getMultiZoneCombination}
         * @param multiZoneCombination the value to be set.
         * @return {@code this}
         */
        public Builder multiZoneCombination(com.aliyun.ros.cdk.core.IResolvable multiZoneCombination) {
            this.multiZoneCombination = multiZoneCombination;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPrimaryVSwitchId}
         * @param primaryVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder primaryVSwitchId(java.lang.String primaryVSwitchId) {
            this.primaryVSwitchId = primaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPrimaryVSwitchId}
         * @param primaryVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder primaryVSwitchId(com.aliyun.ros.cdk.core.IResolvable primaryVSwitchId) {
            this.primaryVSwitchId = primaryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPrimaryZoneId}
         * @param primaryZoneId the value to be set.
         * @return {@code this}
         */
        public Builder primaryZoneId(java.lang.String primaryZoneId) {
            this.primaryZoneId = primaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getPrimaryZoneId}
         * @param primaryZoneId the value to be set.
         * @return {@code this}
         */
        public Builder primaryZoneId(com.aliyun.ros.cdk.core.IResolvable primaryZoneId) {
            this.primaryZoneId = primaryZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.util.List<? extends java.lang.Object> securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getSolrNum}
         * @param solrNum the value to be set.
         * @return {@code this}
         */
        public Builder solrNum(java.lang.Number solrNum) {
            this.solrNum = solrNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getSolrNum}
         * @param solrNum the value to be set.
         * @return {@code this}
         */
        public Builder solrNum(com.aliyun.ros.cdk.core.IResolvable solrNum) {
            this.solrNum = solrNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getSolrSpec}
         * @param solrSpec the value to be set.
         * @return {@code this}
         */
        public Builder solrSpec(java.lang.String solrSpec) {
            this.solrSpec = solrSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getSolrSpec}
         * @param solrSpec the value to be set.
         * @return {@code this}
         */
        public Builder solrSpec(com.aliyun.ros.cdk.core.IResolvable solrSpec) {
            this.solrSpec = solrSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStandbyVSwitchId}
         * @param standbyVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(java.lang.String standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStandbyVSwitchId}
         * @param standbyVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(com.aliyun.ros.cdk.core.IResolvable standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStandbyZoneId}
         * @param standbyZoneId the value to be set.
         * @return {@code this}
         */
        public Builder standbyZoneId(java.lang.String standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStandbyZoneId}
         * @param standbyZoneId the value to be set.
         * @return {@code this}
         */
        public Builder standbyZoneId(com.aliyun.ros.cdk.core.IResolvable standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStreamNum}
         * @param streamNum the value to be set.
         * @return {@code this}
         */
        public Builder streamNum(java.lang.Number streamNum) {
            this.streamNum = streamNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStreamNum}
         * @param streamNum the value to be set.
         * @return {@code this}
         */
        public Builder streamNum(com.aliyun.ros.cdk.core.IResolvable streamNum) {
            this.streamNum = streamNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStreamSpec}
         * @param streamSpec the value to be set.
         * @return {@code this}
         */
        public Builder streamSpec(java.lang.String streamSpec) {
            this.streamSpec = streamSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getStreamSpec}
         * @param streamSpec the value to be set.
         * @return {@code this}
         */
        public Builder streamSpec(com.aliyun.ros.cdk.core.IResolvable streamSpec) {
            this.streamSpec = streamSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getTsdbNum}
         * @param tsdbNum the value to be set.
         * @return {@code this}
         */
        public Builder tsdbNum(java.lang.Number tsdbNum) {
            this.tsdbNum = tsdbNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getTsdbNum}
         * @param tsdbNum the value to be set.
         * @return {@code this}
         */
        public Builder tsdbNum(com.aliyun.ros.cdk.core.IResolvable tsdbNum) {
            this.tsdbNum = tsdbNum;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getTsdbSpec}
         * @param tsdbSpec the value to be set.
         * @return {@code this}
         */
        public Builder tsdbSpec(java.lang.String tsdbSpec) {
            this.tsdbSpec = tsdbSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosMultiZoneInstanceProps#getTsdbSpec}
         * @param tsdbSpec the value to be set.
         * @return {@code this}
         */
        public Builder tsdbSpec(com.aliyun.ros.cdk.core.IResolvable tsdbSpec) {
            this.tsdbSpec = tsdbSpec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMultiZoneInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMultiZoneInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMultiZoneInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMultiZoneInstanceProps {
        private final java.lang.Object diskCategory;
        private final java.lang.Object instanceName;
        private final java.lang.Object vpcId;
        private final java.lang.Object arbiterVSwitchId;
        private final java.lang.Object arbiterZoneId;
        private final java.lang.Object coldStorage;
        private final java.lang.Object coreSingleStorage;
        private final java.lang.Object coreSpec;
        private final java.lang.Object filestoreNum;
        private final java.lang.Object filestoreSpec;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object lindormNum;
        private final java.lang.Object lindormSpec;
        private final java.lang.Object logDiskCategory;
        private final java.lang.Object logNum;
        private final java.lang.Object logSingleStorage;
        private final java.lang.Object logSpec;
        private final java.lang.Object multiZoneCombination;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object primaryVSwitchId;
        private final java.lang.Object primaryZoneId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object solrNum;
        private final java.lang.Object solrSpec;
        private final java.lang.Object standbyVSwitchId;
        private final java.lang.Object standbyZoneId;
        private final java.lang.Object streamNum;
        private final java.lang.Object streamSpec;
        private final java.lang.Object tsdbNum;
        private final java.lang.Object tsdbSpec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.arbiterVSwitchId = software.amazon.jsii.Kernel.get(this, "arbiterVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.arbiterZoneId = software.amazon.jsii.Kernel.get(this, "arbiterZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coldStorage = software.amazon.jsii.Kernel.get(this, "coldStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreSingleStorage = software.amazon.jsii.Kernel.get(this, "coreSingleStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreSpec = software.amazon.jsii.Kernel.get(this, "coreSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filestoreNum = software.amazon.jsii.Kernel.get(this, "filestoreNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filestoreSpec = software.amazon.jsii.Kernel.get(this, "filestoreSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lindormNum = software.amazon.jsii.Kernel.get(this, "lindormNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lindormSpec = software.amazon.jsii.Kernel.get(this, "lindormSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logDiskCategory = software.amazon.jsii.Kernel.get(this, "logDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logNum = software.amazon.jsii.Kernel.get(this, "logNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logSingleStorage = software.amazon.jsii.Kernel.get(this, "logSingleStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logSpec = software.amazon.jsii.Kernel.get(this, "logSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiZoneCombination = software.amazon.jsii.Kernel.get(this, "multiZoneCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryVSwitchId = software.amazon.jsii.Kernel.get(this, "primaryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryZoneId = software.amazon.jsii.Kernel.get(this, "primaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.solrNum = software.amazon.jsii.Kernel.get(this, "solrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.solrSpec = software.amazon.jsii.Kernel.get(this, "solrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyVSwitchId = software.amazon.jsii.Kernel.get(this, "standbyVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyZoneId = software.amazon.jsii.Kernel.get(this, "standbyZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.streamNum = software.amazon.jsii.Kernel.get(this, "streamNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.streamSpec = software.amazon.jsii.Kernel.get(this, "streamSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tsdbNum = software.amazon.jsii.Kernel.get(this, "tsdbNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tsdbSpec = software.amazon.jsii.Kernel.get(this, "tsdbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskCategory = java.util.Objects.requireNonNull(builder.diskCategory, "diskCategory is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.arbiterVSwitchId = builder.arbiterVSwitchId;
            this.arbiterZoneId = builder.arbiterZoneId;
            this.coldStorage = builder.coldStorage;
            this.coreSingleStorage = builder.coreSingleStorage;
            this.coreSpec = builder.coreSpec;
            this.filestoreNum = builder.filestoreNum;
            this.filestoreSpec = builder.filestoreSpec;
            this.instanceChargeType = builder.instanceChargeType;
            this.lindormNum = builder.lindormNum;
            this.lindormSpec = builder.lindormSpec;
            this.logDiskCategory = builder.logDiskCategory;
            this.logNum = builder.logNum;
            this.logSingleStorage = builder.logSingleStorage;
            this.logSpec = builder.logSpec;
            this.multiZoneCombination = builder.multiZoneCombination;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.primaryVSwitchId = builder.primaryVSwitchId;
            this.primaryZoneId = builder.primaryZoneId;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.solrNum = builder.solrNum;
            this.solrSpec = builder.solrSpec;
            this.standbyVSwitchId = builder.standbyVSwitchId;
            this.standbyZoneId = builder.standbyZoneId;
            this.streamNum = builder.streamNum;
            this.streamSpec = builder.streamSpec;
            this.tsdbNum = builder.tsdbNum;
            this.tsdbSpec = builder.tsdbSpec;
        }

        @Override
        public final java.lang.Object getDiskCategory() {
            return this.diskCategory;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getArbiterVSwitchId() {
            return this.arbiterVSwitchId;
        }

        @Override
        public final java.lang.Object getArbiterZoneId() {
            return this.arbiterZoneId;
        }

        @Override
        public final java.lang.Object getColdStorage() {
            return this.coldStorage;
        }

        @Override
        public final java.lang.Object getCoreSingleStorage() {
            return this.coreSingleStorage;
        }

        @Override
        public final java.lang.Object getCoreSpec() {
            return this.coreSpec;
        }

        @Override
        public final java.lang.Object getFilestoreNum() {
            return this.filestoreNum;
        }

        @Override
        public final java.lang.Object getFilestoreSpec() {
            return this.filestoreSpec;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getLindormNum() {
            return this.lindormNum;
        }

        @Override
        public final java.lang.Object getLindormSpec() {
            return this.lindormSpec;
        }

        @Override
        public final java.lang.Object getLogDiskCategory() {
            return this.logDiskCategory;
        }

        @Override
        public final java.lang.Object getLogNum() {
            return this.logNum;
        }

        @Override
        public final java.lang.Object getLogSingleStorage() {
            return this.logSingleStorage;
        }

        @Override
        public final java.lang.Object getLogSpec() {
            return this.logSpec;
        }

        @Override
        public final java.lang.Object getMultiZoneCombination() {
            return this.multiZoneCombination;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPrimaryVSwitchId() {
            return this.primaryVSwitchId;
        }

        @Override
        public final java.lang.Object getPrimaryZoneId() {
            return this.primaryZoneId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getSolrNum() {
            return this.solrNum;
        }

        @Override
        public final java.lang.Object getSolrSpec() {
            return this.solrSpec;
        }

        @Override
        public final java.lang.Object getStandbyVSwitchId() {
            return this.standbyVSwitchId;
        }

        @Override
        public final java.lang.Object getStandbyZoneId() {
            return this.standbyZoneId;
        }

        @Override
        public final java.lang.Object getStreamNum() {
            return this.streamNum;
        }

        @Override
        public final java.lang.Object getStreamSpec() {
            return this.streamSpec;
        }

        @Override
        public final java.lang.Object getTsdbNum() {
            return this.tsdbNum;
        }

        @Override
        public final java.lang.Object getTsdbSpec() {
            return this.tsdbSpec;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskCategory", om.valueToTree(this.getDiskCategory()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getArbiterVSwitchId() != null) {
                data.set("arbiterVSwitchId", om.valueToTree(this.getArbiterVSwitchId()));
            }
            if (this.getArbiterZoneId() != null) {
                data.set("arbiterZoneId", om.valueToTree(this.getArbiterZoneId()));
            }
            if (this.getColdStorage() != null) {
                data.set("coldStorage", om.valueToTree(this.getColdStorage()));
            }
            if (this.getCoreSingleStorage() != null) {
                data.set("coreSingleStorage", om.valueToTree(this.getCoreSingleStorage()));
            }
            if (this.getCoreSpec() != null) {
                data.set("coreSpec", om.valueToTree(this.getCoreSpec()));
            }
            if (this.getFilestoreNum() != null) {
                data.set("filestoreNum", om.valueToTree(this.getFilestoreNum()));
            }
            if (this.getFilestoreSpec() != null) {
                data.set("filestoreSpec", om.valueToTree(this.getFilestoreSpec()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getLindormNum() != null) {
                data.set("lindormNum", om.valueToTree(this.getLindormNum()));
            }
            if (this.getLindormSpec() != null) {
                data.set("lindormSpec", om.valueToTree(this.getLindormSpec()));
            }
            if (this.getLogDiskCategory() != null) {
                data.set("logDiskCategory", om.valueToTree(this.getLogDiskCategory()));
            }
            if (this.getLogNum() != null) {
                data.set("logNum", om.valueToTree(this.getLogNum()));
            }
            if (this.getLogSingleStorage() != null) {
                data.set("logSingleStorage", om.valueToTree(this.getLogSingleStorage()));
            }
            if (this.getLogSpec() != null) {
                data.set("logSpec", om.valueToTree(this.getLogSpec()));
            }
            if (this.getMultiZoneCombination() != null) {
                data.set("multiZoneCombination", om.valueToTree(this.getMultiZoneCombination()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPrimaryVSwitchId() != null) {
                data.set("primaryVSwitchId", om.valueToTree(this.getPrimaryVSwitchId()));
            }
            if (this.getPrimaryZoneId() != null) {
                data.set("primaryZoneId", om.valueToTree(this.getPrimaryZoneId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getSolrNum() != null) {
                data.set("solrNum", om.valueToTree(this.getSolrNum()));
            }
            if (this.getSolrSpec() != null) {
                data.set("solrSpec", om.valueToTree(this.getSolrSpec()));
            }
            if (this.getStandbyVSwitchId() != null) {
                data.set("standbyVSwitchId", om.valueToTree(this.getStandbyVSwitchId()));
            }
            if (this.getStandbyZoneId() != null) {
                data.set("standbyZoneId", om.valueToTree(this.getStandbyZoneId()));
            }
            if (this.getStreamNum() != null) {
                data.set("streamNum", om.valueToTree(this.getStreamNum()));
            }
            if (this.getStreamSpec() != null) {
                data.set("streamSpec", om.valueToTree(this.getStreamSpec()));
            }
            if (this.getTsdbNum() != null) {
                data.set("tsdbNum", om.valueToTree(this.getTsdbNum()));
            }
            if (this.getTsdbSpec() != null) {
                data.set("tsdbSpec", om.valueToTree(this.getTsdbSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-lindorm.RosMultiZoneInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMultiZoneInstanceProps.Jsii$Proxy that = (RosMultiZoneInstanceProps.Jsii$Proxy) o;

            if (!diskCategory.equals(that.diskCategory)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.arbiterVSwitchId != null ? !this.arbiterVSwitchId.equals(that.arbiterVSwitchId) : that.arbiterVSwitchId != null) return false;
            if (this.arbiterZoneId != null ? !this.arbiterZoneId.equals(that.arbiterZoneId) : that.arbiterZoneId != null) return false;
            if (this.coldStorage != null ? !this.coldStorage.equals(that.coldStorage) : that.coldStorage != null) return false;
            if (this.coreSingleStorage != null ? !this.coreSingleStorage.equals(that.coreSingleStorage) : that.coreSingleStorage != null) return false;
            if (this.coreSpec != null ? !this.coreSpec.equals(that.coreSpec) : that.coreSpec != null) return false;
            if (this.filestoreNum != null ? !this.filestoreNum.equals(that.filestoreNum) : that.filestoreNum != null) return false;
            if (this.filestoreSpec != null ? !this.filestoreSpec.equals(that.filestoreSpec) : that.filestoreSpec != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.lindormNum != null ? !this.lindormNum.equals(that.lindormNum) : that.lindormNum != null) return false;
            if (this.lindormSpec != null ? !this.lindormSpec.equals(that.lindormSpec) : that.lindormSpec != null) return false;
            if (this.logDiskCategory != null ? !this.logDiskCategory.equals(that.logDiskCategory) : that.logDiskCategory != null) return false;
            if (this.logNum != null ? !this.logNum.equals(that.logNum) : that.logNum != null) return false;
            if (this.logSingleStorage != null ? !this.logSingleStorage.equals(that.logSingleStorage) : that.logSingleStorage != null) return false;
            if (this.logSpec != null ? !this.logSpec.equals(that.logSpec) : that.logSpec != null) return false;
            if (this.multiZoneCombination != null ? !this.multiZoneCombination.equals(that.multiZoneCombination) : that.multiZoneCombination != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.primaryVSwitchId != null ? !this.primaryVSwitchId.equals(that.primaryVSwitchId) : that.primaryVSwitchId != null) return false;
            if (this.primaryZoneId != null ? !this.primaryZoneId.equals(that.primaryZoneId) : that.primaryZoneId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.solrNum != null ? !this.solrNum.equals(that.solrNum) : that.solrNum != null) return false;
            if (this.solrSpec != null ? !this.solrSpec.equals(that.solrSpec) : that.solrSpec != null) return false;
            if (this.standbyVSwitchId != null ? !this.standbyVSwitchId.equals(that.standbyVSwitchId) : that.standbyVSwitchId != null) return false;
            if (this.standbyZoneId != null ? !this.standbyZoneId.equals(that.standbyZoneId) : that.standbyZoneId != null) return false;
            if (this.streamNum != null ? !this.streamNum.equals(that.streamNum) : that.streamNum != null) return false;
            if (this.streamSpec != null ? !this.streamSpec.equals(that.streamSpec) : that.streamSpec != null) return false;
            if (this.tsdbNum != null ? !this.tsdbNum.equals(that.tsdbNum) : that.tsdbNum != null) return false;
            return this.tsdbSpec != null ? this.tsdbSpec.equals(that.tsdbSpec) : that.tsdbSpec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskCategory.hashCode();
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.arbiterVSwitchId != null ? this.arbiterVSwitchId.hashCode() : 0);
            result = 31 * result + (this.arbiterZoneId != null ? this.arbiterZoneId.hashCode() : 0);
            result = 31 * result + (this.coldStorage != null ? this.coldStorage.hashCode() : 0);
            result = 31 * result + (this.coreSingleStorage != null ? this.coreSingleStorage.hashCode() : 0);
            result = 31 * result + (this.coreSpec != null ? this.coreSpec.hashCode() : 0);
            result = 31 * result + (this.filestoreNum != null ? this.filestoreNum.hashCode() : 0);
            result = 31 * result + (this.filestoreSpec != null ? this.filestoreSpec.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.lindormNum != null ? this.lindormNum.hashCode() : 0);
            result = 31 * result + (this.lindormSpec != null ? this.lindormSpec.hashCode() : 0);
            result = 31 * result + (this.logDiskCategory != null ? this.logDiskCategory.hashCode() : 0);
            result = 31 * result + (this.logNum != null ? this.logNum.hashCode() : 0);
            result = 31 * result + (this.logSingleStorage != null ? this.logSingleStorage.hashCode() : 0);
            result = 31 * result + (this.logSpec != null ? this.logSpec.hashCode() : 0);
            result = 31 * result + (this.multiZoneCombination != null ? this.multiZoneCombination.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.primaryVSwitchId != null ? this.primaryVSwitchId.hashCode() : 0);
            result = 31 * result + (this.primaryZoneId != null ? this.primaryZoneId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.solrNum != null ? this.solrNum.hashCode() : 0);
            result = 31 * result + (this.solrSpec != null ? this.solrSpec.hashCode() : 0);
            result = 31 * result + (this.standbyVSwitchId != null ? this.standbyVSwitchId.hashCode() : 0);
            result = 31 * result + (this.standbyZoneId != null ? this.standbyZoneId.hashCode() : 0);
            result = 31 * result + (this.streamNum != null ? this.streamNum.hashCode() : 0);
            result = 31 * result + (this.streamSpec != null ? this.streamSpec.hashCode() : 0);
            result = 31 * result + (this.tsdbNum != null ? this.tsdbNum.hashCode() : 0);
            result = 31 * result + (this.tsdbSpec != null ? this.tsdbSpec.hashCode() : 0);
            return result;
        }
    }
}
