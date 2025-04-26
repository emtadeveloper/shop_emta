import { ApprovalList } from './approvalList.model.mjs';

const createApprovalList = async (data) => {
    return await ApprovalList.create(data);
};

const getAllApprovalLists = async () => {
    return await ApprovalList.find().populate('category').populate('approvalSteps.user');
};

const getApprovalListById = async (id) => {
    return await ApprovalList.findById(id).populate('category').populate('approvalSteps.user');
};

const updateApprovalList = async (id, data) => {
    return await ApprovalList.findByIdAndUpdate(id, data, { new: true });
};

const deleteApprovalList = async (id) => {
    return await ApprovalList.findByIdAndDelete(id);
};

export default {
    createApprovalList,
    getAllApprovalLists,
    getApprovalListById,
    updateApprovalList,
    deleteApprovalList
};
